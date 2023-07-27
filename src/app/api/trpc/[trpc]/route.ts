import { fetchRequestHandler,FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
//import { createContext } from "@/server/context";
//import { createTRPCContext } from "@/server/api/trpc";
import { appRouter } from "@/server/api/root";

const handler = (request: Request) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router: appRouter,
    createContext: function (
      opts: FetchCreateContextFnOptions
    ): object | Promise<object> {
      return { ...opts,};
    } as any,
    onError({ error }) {
      if (error.code === "INTERNAL_SERVER_ERROR") {
          console.error("Caught TRPC error:", error)
      }
  },
  });
}

export { handler as GET, handler as POST };