import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import clientPromise from './../../../database/mongodb';

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/SignIn',
  },
  // database: process.env.DB_URL,
  // session: {
  //   jwt: true,
  // },
  // jwt: {
  //   secret: 'asdcvbtjhm',
  // },
  // callbacks: {
  //   async jwt(token, user) {
  //     if (user) {
  //       token.id = user.id;
  //     }
  //     return token;
  //   },
  //   async session(session, token) {
  //     session.user.id = token.id;
  //     return session;
  //   },
  // },
});
