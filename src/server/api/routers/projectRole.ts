import { createTRPCRouter, publicProcedure } from "../trpc";

export const projectRoleRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const projectRoles = await ctx.db.projectRole.findMany();
    return projectRoles;
  }),
});
