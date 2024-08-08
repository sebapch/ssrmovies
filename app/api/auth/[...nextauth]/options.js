import GoogleProvider from "next-auth/providers/google";

export const options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        let userRole = "User";
        return {
          ...profile,
          id: profile.sub,
          name: profile.name,
          picture: profile.picture,
          email: profile.email, 
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  
  callbacks: {
    async signIn() {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        
        return true;
      } else {
        // Return false to display a default error message
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      if (user) token.picture = user.picture;
      
      return token;
    },
    
    async session({ session, token }) {
      const { user } = session || {};
      if (user) {
        user.role = token.role;
        user.image = token.picture;
        user.id = token.sub;
        
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  events: {
    async signIn(message) {

    },
  },
};
