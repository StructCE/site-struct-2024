import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const projects = await ctx.db.project.findMany({
      where:{
        show: false
      }
    })
    return projects
  }),
  
  getOne: publicProcedure.input(z.object({id: z.string()})).query( async ({ ctx, input }) => {
    const project = await ctx.db.project.findFirst({
      where: {
        id: input.id
      }
    })
    return project
  }),

  createProject: protectedProcedure.input(
    z.object({
      name: z.string(),
      description: z.string(),
      link: z.string(),
      logoPublicId: z.string().optional()
    })
  ).query(async ({ctx, input}) => {
    const project = await ctx.db.project.create({
      data: input
    })
    return project
  }),

  removeProject: protectedProcedure.input(z.object({id:z.string()})).query( async ({ctx, input}) => {
    const project = await ctx.db.project.delete({
      where: {
        id: input.id
      }
    })
    return project
  }),

  updateProject: protectedProcedure.input(z.object({
    id: z.string(),
    data: z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      link: z.string().optional(),
      logoPublicId: z.string().optional(),
    })
  })).query(async ({ ctx, input }) => {
    const project = await ctx.db.project.update({
      where: {
        id: input.id
      },
      data: input.data
    })
  }),

});
