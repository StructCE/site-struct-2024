import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const partnerRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ctx}) => {
    const partners = await ctx.db.partner.findMany()
    return partners
  })
});
