import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/utils/prisma/prismadb';
import { nanoid } from 'nanoid';
export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/sign-in'
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.image = token.image;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.username = token.username;
      }
      return session;
    },
    async jwt({ token, user, account, session }) {
      const dbUser = await prisma.user.findFirst({
        where: { email: token.email }
      });
      if (!dbUser) {
        token.id = user!.id;
        return token;
      }

      if (!dbUser.username) {
        await prisma.user.update({
          where: {
            id: dbUser.id
          },
          data: {
            username: nanoid(10)
          }
        });
      }
      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        username: dbUser.username,
        image: dbUser.image
      };
    },
    redirect() {
      return '/';
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
