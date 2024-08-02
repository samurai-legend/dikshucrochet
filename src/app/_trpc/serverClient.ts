import { appRouter } from "@/server";
import { createCallerFactory } from "@/server/trpc";

const createCaller = createCallerFactory(appRouter);

// 2. create a caller using your `Context`
export const serverClient = createCaller({});
