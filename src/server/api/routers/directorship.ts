import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const directorshipRouter = createTRPCRouter({
  getAllWithMembers: publicProcedure.query(async ({ ctx }) => {
    const directorshipsWithMembers = await ctx.db.directorship.findMany({
      orderBy: {
        name: "asc",
      },
      include: {
        members: {
          include: {
            member: true,
            directorshipRole: true,
          },
        },
      },
    });
    let res = directorshipsWithMembers
      .filter(
        (directorshipwithmembers) =>
          directorshipwithmembers.name !== "Previdência",
      )
      .map((directorshipwithmembers) => ({
        name: directorshipwithmembers.name,
        members: directorshipwithmembers.members.map((member) => ({
          id: member.member.id,
          name: member.member.name,
          logoPublicId: member.member.logoPublicId,
          role: member.directorshipRole.name,
        })),
      }));

    const presidenceIndex = res.findIndex(
      (element) => element.name === "Presidência",
    );
    const presidence = res[presidenceIndex];
    if (presidence) {
      const beforePresidence = res.slice(0, presidenceIndex);
      const afterPresidence = res.slice(presidenceIndex + 1);
      res = [presidence, ...beforePresidence, ...afterPresidence];
    }

    res = res.map((directorship) => {
      const directorIndex = directorship.members.findIndex(
        (member) => member.role === "Diretor",
      );
      const director = directorship.members[directorIndex];
      if (director) {
        const beforeDirector = directorship.members.slice(0, directorIndex);
        const afterDirector = directorship.members.slice(directorIndex + 1);
        const serializedDirectorship = {
          ...directorship,
          members: [director, ...beforeDirector, ...afterDirector],
        };
        return serializedDirectorship;
      }
      return directorship;
    });
    return res;
  }),

  addMember: protectedProcedure
    .input(
      z.object({
        directorshipId: z.string(),
        memberId: z.string(),
        directorshipRoleId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const directorshipMember = await ctx.db.directorshipMember.create({
        data: input,
      });
      return directorshipMember;
    }),

  removeMember: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const directorshipMember = await ctx.db.directorshipMember.delete({
        where: input,
      });
      return directorshipMember;
    }),

  countDirectiorshipMembers: publicProcedure.query(async ({ ctx }) => {
    const countDirectiorshipMembers = await ctx.db.member.count({
      where: {
        NOT: {
          directorships: { every: { directorship: { name: "Previdência" } } },
        },
      },
    });
    return countDirectiorshipMembers;
  }),
});
