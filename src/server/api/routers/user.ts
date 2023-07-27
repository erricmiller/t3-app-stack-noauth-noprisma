import { z } from 'zod';

import  prismadb from '@/server/db';
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure
} from '@/server/api/trpc';
import RegistrationSchema from '@/schemas/RegistrationSchema';

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(RegistrationSchema)
    .mutation(async ({ input }) => {
      const { name, email, password } = input;

      const user = await prismadb.user.create({
        data: {
          name,
          email,
          password,
        }
      });

      return user;
    }),

  get: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1).max(255)
      })
    )
    .mutation(async ({ input }) => {
      const { id } = input;

      const user = await prismadb.user.findFirst({
        where: { id }
      });

      return user || null;
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1).max(255),
        data: z.record(z.any())
      })
    )
    .mutation(async ({ input }) => {
      const { id, ...data } = input;

      const user = await prismadb.user.update({
        where: { id },
        data
      });

      return user || null;
    }),

  delete: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1).max(255)
      })
    )
    .mutation(async ({ input }) => {
      const { id } = input;

      await prismadb.user.delete({
        where: { id }
      });

      return true;
    })
});