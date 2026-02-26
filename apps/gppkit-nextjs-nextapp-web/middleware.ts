// Middleware disabled - not compatible with static export (output: 'export')
// Supabase auth middleware can be re-enabled if switching to server deployment

import { type NextRequest, NextResponse } from "next/server";

export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
