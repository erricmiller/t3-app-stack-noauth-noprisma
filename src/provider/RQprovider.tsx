"use client";

import React from "react";
import { QueryClientProvider, QueryClient, Hydrate, dehydrate } from "@tanstack/react-query";
import RQqueryClient from "@/utils/RQclient";
//import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

function RQProviders({ children }: React.PropsWithChildren) {
  const [queryClient] = React.useState(() =>
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          cacheTime: Infinity,
          staleTime: Infinity,
          // staleTime: 5 * 1000,
        },
      },
    }),
  )
  const dehydratedState = dehydrate(queryClient);
  return (
    <QueryClientProvider client={RQqueryClient}>
      <Hydrate state={dehydratedState}>
        {children}
      </Hydrate>
      {/* <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration> */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default RQProviders;
