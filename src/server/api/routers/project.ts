// import { CarTaxiFront } from "lucide-react";
import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const projects = await ctx.db.project.findMany({
      where: {
        show: true,
      },
    });
    return projects;
  }),

  getProjectAndMembers: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const projectAndMembers = await ctx.db.project.findFirst({
        where: input,
        include: {
          projectMembers: {
            include: {
              member: true,
              role: true,
            },
          },
        },
      });
      if (projectAndMembers) {
        const project = {
          id: projectAndMembers.id,
          name: projectAndMembers.name,
          description: projectAndMembers.description,
          link: projectAndMembers.link,
          logoPublicId: projectAndMembers.logoPublicId,
          show: projectAndMembers.show,
          members: projectAndMembers.projectMembers.map((projectMember) => ({
            id: projectMember.member.id,
            name: projectMember.member.name,
            logoPublicId: projectMember.member.logoPublicId,
            role: projectMember.role.name,
          })),
        };
        const managerPos = project.members.findIndex(
          (member) => member.role === "Gerente",
        );
        const managerData = project.members[managerPos];
        const projectOwnerPos = project.members.findIndex(
          (member) => member.role === "Project Owner",
        );
        const projectOwnerData = project.members[projectOwnerPos];

        const devs = project.members.filter(
          (member) =>
            member.role !== "Gerente" && member.role !== "Project Owner",
        );
        return {
          ...project,
          members: [managerData, projectOwnerData, ...devs],
        };
      }
    }),

  createProject: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        link: z.string(),
        logoPublicId: z.string().optional(),
        show: z.boolean().default(false),
        members: z.array(
          z.object({
            memberId: z.string(),
            projectRoleId: z.string(),
          }),
        ),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { members, ...project } = input;
      const createdProject = await ctx.db.project.create({
        data: project,
      });

      await Promise.all(
        members.map(async (member) => {
          const createdMember = await ctx.db.projectMember.create({
            data: {
              memberId: member.memberId,
              projectRoleId: member.projectRoleId,
              projectId: createdProject.id,
            },
          });
          return createdMember;
        }),
      );

      return createdProject;
    }),

  removeProject: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const project = await ctx.db.project.delete({
        where: input,
      });
      return project;
    }),

  updateProject: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        data: z.object({
          name: z.string().optional(),
          description: z.string().optional(),
          link: z.string().optional(),
          logoPublicId: z.string().optional(),
        }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const project = await ctx.db.project.update({
        where: {
          id: input.id,
        },
        data: input.data,
      });
      return project;
    }),

  addMember: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        memberId: z.string(),
        projectRoleId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const projectMember = await ctx.db.projectMember.create({
        data: input,
      });
      return projectMember;
    }),

  removeMember: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const projectMember = await ctx.db.projectMember.delete({
        where: input,
      });
      return projectMember;
    }),

  countProjects: publicProcedure.query(async ({ ctx }) => {
    const countProjects = await ctx.db.project.count({
      where: {},
    });
    return countProjects;
  }),
});

type Member = {
  id: string;
  name: string;
  logoPublicId: string;
  role: string;
};

type ProjectWithMembers = {
  id: string;
  name: string;
  description: string;
  link: string;
  logoPublicId: string;
  show: boolean;
  members: (Member | undefined)[];
};

type MutatedProject = {
  id: string;
  name: string;
  description: string;
  link: string;
  show: boolean;
  logoPublicId: string;
};

type ProjectMember = {
  id: string;
  memberId: string;
  projectId: string;
  projectRoleId: string;
};

export {
  type Member,
  type MutatedProject,
  type ProjectMember,
  type ProjectWithMembers,
};
