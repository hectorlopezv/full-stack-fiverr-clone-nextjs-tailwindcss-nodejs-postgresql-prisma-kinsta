import NextAuth from "next-auth";

import { authOptions } from "@/app/utils/config";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
