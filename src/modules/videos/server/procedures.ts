import { TRPCError } from "@trpc/server";

import { db } from "@/db";
import { videos } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";

export const videosRouter = createTRPCRouter({
  create: protectedProcedure.mutation(async ({ ctx }) => {
    const { id: userId } = ctx.user;

    const [video] = await db
      .insert(videos)
      .values({ userId, title: "Untitled" })
      .returning();

    if (!video) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });

    return video;
  }),
});
