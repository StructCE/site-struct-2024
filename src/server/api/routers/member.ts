import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const createMemberSchema = z.object({
  name: z.string(),
  logoPublicId: z.string().optional(),
  directorships: z.object({
    create: z.array(
      z.object({
        directorshipId: z.string(),
        directorshipRoleId: z.string(),
      }),
    ),
  }),
  projects: z
    .object({
      create: z.array(
        z.object({
          projectId: z.string(),
          projectRoleId: z.string(),
        }),
      ),
    })
    .optional(),
});

export const memberRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const members = await ctx.db.member.findMany({
      where: {
        directorships: {
          none: {
            directorship: {
              name: "Previdência"
            }
          }
        }
      }
    });
    return members;
  }),

  createMember: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        logoPublicId: z.string().optional(),
        directorships: z.array(
          z.object({
            directorship: z.string(),
            role: z.string(),
          }),
        ),
        projects: z
          .array(
            z.object({
              project: z.string(),
              role: z.string(),
            }),
          )
          .optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const directorships = await Promise.all(
        input.directorships.map(async (directorship) => ({
          directorshipId: (
            await ctx.db.directorship.findFirst({
              where: {
                name: directorship.directorship,
              },
            })
          )?.id,
          directorshipRoleId: (
            await ctx.db.directorshipRole.findFirst({
              where: {
                name: directorship.role,
              },
            })
          )?.id,
        })),
      );

      let projects;
      if (input.projects !== undefined) {
        projects = await Promise.all(
          input.projects.map(async (project) => ({
            projectId: (
              await ctx.db.project.findFirst({
                where: {
                  name: project.project,
                },
              })
            )?.id,
            projectRoleId: (
              await ctx.db.projectRole.findFirst({
                where: {
                  name: project.role,
                },
              })
            )?.id,
          })),
        );
      }

      const data = {
        name: input.name,
        logoPublicId: input.logoPublicId,
        directorships: {
          create: directorships,
        },
        projects: projects ? { create: projects } : undefined,
      };

      const res = createMemberSchema.safeParse(data);
      if (res.success) {
        try {
          const member = await ctx.db.member.create({
            data: res.data,
          });
          return member;
        } catch (error) {
          return error;
        }
      }
      return res.error;
    }),

  updateMember: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        data: z.object({
          name: z.string().optional(),
          logoPublicId: z.string().optional(),
        }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const member = await ctx.db.member.update({
        where: {
          id: input.id,
        },
        data: input.data,
      });
      return member;
    }),

  removeMember: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const member = await ctx.db.member.delete({
        where: input,
      });
      return member;
    }),
});
