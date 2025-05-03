import NextAuth from "next-auth";
// import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
// import Auth0Provider from "next-auth/providers/auth0";
import CredentialsProvider from "next-auth/providers/credentials";
import {MongoDBAdapter} from '@auth/mongodb-adapter'
import clientPromise from "./lib/mongodb";
import { adapter } from "next/dist/server/web/adapter";

export const authOptions = {
  // Configure one or more authentication providers
  adapter:MongoDBAdapter(clientPromise),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    //   FacebookProvider({
    //     clientId: process.env.FACEBOOK_ID,
    //     clientSecret: process.env.FACEBOOK_SECRET,
    //   }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
      // Auth0Provider({
      //   clientId: process.env.AUTH0_CLIENT_ID,
      //   clientSecret: process.env.AUTH0_CLIENT_SECRET,
      //   issuer: process.env.AUTH0_ISSUER,
      // }),
    // ...add more providers here
  ],
  pages : {
    //signIn : '/signin'
  },
  session:{
    strategy : "jwt"
  },
  secret : process.env.JWT_SECRET
}

export default NextAuth(authOptions)