import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

const prismadb = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb

export default prismadb;

// import { PrismaClient } from '@prisma/client'
// import { env } from "@/env.mjs";
// //import "server-only"

// declare global {
//   // eslint-disable-next-line no-var, no-unused-vars
//   var cachedPrisma: PrismaClient
// }

// let prisma: PrismaClient
// if (env.NODE_ENV === 'production') {
//   prisma = new PrismaClient()
// } else {
//   if (!global.cachedPrisma) {
//     global.cachedPrisma = new PrismaClient(
//       {
//         log:
//           env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
//       }
//     )
//   }
//   prisma = global.cachedPrisma
// }

// export const db = prisma

// import { PrismaClient } from "@prisma/client";
// import { env } from "@/env.mjs";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log:
//       env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
//   });

// if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
