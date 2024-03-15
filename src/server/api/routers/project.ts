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
      const project = {
        name: projectAndMembers?.name,
        description: projectAndMembers?.description,
        link: projectAndMembers?.link,
        logoPublicId: projectAndMembers?.logoPublicId,
        members: projectAndMembers?.projectMembers.map((projectMember) => ({
          name: projectMember.member.name,
          logoPublicId: projectMember.member.logoPublicId,
          role: projectMember.role.name,
        })),
      };
      return project;
    }),

  createProject: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        link: z.string(),
        logoPublicId: z.string().optional(),
        show: z.boolean().default(false),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const project = await ctx.db.project.create({
        data: input,
      });
      return project;
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
