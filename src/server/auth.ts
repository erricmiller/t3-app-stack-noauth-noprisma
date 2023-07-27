//import { env } from "@/env.mjs";
import  prismadb from '@/server/db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { nanoid } from 'nanoid'
import { type GetServerSidePropsContext } from "next";
import { NextAuthOptions, getServerSession } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from 'next-auth/providers/github';
import DiscordProvider from 'next-auth/providers/discord';
//import CredentialsProvider from 'next-auth/providers/credentials'; // Import the Credentials provider
//import SignInInputSchema from '@/schema/SignInInputSchema';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismadb),
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60 // 24 hours
  },

  jwt: {
     // A secret to use for key generation (you should set this explicitly)
     secret: process.env.NEXTAUTH_SECRET || 'CHANGE_THIS'
   },
   
  pages: {
    signIn: '/sign-in',
//     signIn: '/auth/signin',
//     signOut: '/auth/signout',
//     error: '/auth/signin?error=', // Error code passed in query string as ?error=
//     verifyRequest: '/auth/verify-request', // (used for check email message)
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    DiscordProvider({
        //     allowDangerousEmailAccountLinking: true,
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
      //  // Credentials
  //   CredentialsProvider({
  //     // The name to display on the sign in form (e.g. "Sign in with...")
  //     name: 'Credentials',

  //     // The credentials is used to generate a suitable form on the sign in page.
  //     credentials: {
  //       email: { label: 'Email', type: 'email', placeholder: 'Email' },
  //       password: { label: 'Password', type: 'password' }
  //     },

  //     async authorize(input): Promise<User | null> {
  //       const credentials = await SignInInputSchema.parseAsync(input);

  //       const user = await prisma.user.findFirst({
  //         where: { email: credentials.email }
  //       });

  //       if (!user || credentials.password !== user.password) {
  //         return null;
  //       }

  //       return user;
  //     }
  //   })
  ],

  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
        session.user.username = token.username
      }

      return session
    },

    async jwt({ token, user }) {
      const dbUser = await prismadb.user.findFirst({
        where: {
          email: token.email,
        },
      })

      if (!dbUser) {
        token.id = user!.id
        return token
      }

      if (!dbUser.username) {
        await prismadb.user.update({
          where: {
            id: dbUser.id,
          },
          data: {
            username: nanoid(10),
          },
        })
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        username: dbUser.username,
      }
    },
   //redirect("/dashboard");
    redirect() {
      return '/'
    },
  },
}

export const getAuthSession = () => getServerSession(authOptions)

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext['req'];
  res: GetServerSidePropsContext['res'];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};