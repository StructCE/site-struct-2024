import { projectRouter } from "~/server/api/routers/project";
import { createTRPCRouter } from "~/server/api/trpc";
import { partnerRouter } from "./routers/partner";
import { directorshipRouter } from "./routers/directorship";
import { memberRouter } from "./routers/member";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  project: projectRouter,
  partner: partnerRouter,
  directorship: directorshipRouter,
  member: memberRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
