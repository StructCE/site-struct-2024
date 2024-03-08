import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure
  } from "~/server/api/trpc";


export const memberRouter = createTRPCRouter({
  createMember: protectedProcedure.input(z.object({
    name: z.string(), 
    logoPublicId: z.string()
  })).mutation(async ({ctx, input}) => {
    const member = await ctx.db.member.create({
        data: input
      })
    return member
  }),

  updateMember: protectedProcedure.input(z.object({
    id: z.string(),
    data: z.object({
      name: z.string().optional(),
      logoPublicId: z.string().optional(),
    })
  })).mutation(async ({ctx, input}) => {
    const member = await ctx.db.member.update({
      where: {
        id: input.id
      },
      data: input.data
    })
    return member
  }),

  removeMember: protectedProcedure.input(z.object({id: z.string()})).mutation(async ({ctx, input}) => {
    const member = await ctx.db.member.delete({
      where: input
    })
    return member
  })
});
  