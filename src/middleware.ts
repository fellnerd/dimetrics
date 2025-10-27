import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Deutsche URL-Redirects
  const redirects: Record<string, string> = {
    "/ueber-dimetrics": "/about",
    "/über-dimetrics": "/about",
    "/ueber-uns": "/about",
    "/über-uns": "/about",
    "/kontakt": "/contact-us",
    "/kontakt-uns": "/contact-us",
    "/home": "/",
    "/index": "/",
  };

  // Prüfe ob eine Umleitung erforderlich ist
  if (redirects[pathname]) {
    const url = request.nextUrl.clone();
    url.pathname = redirects[pathname];
    return NextResponse.redirect(url, 301); // Permanent redirect für SEO
  }

  return NextResponse.next();
}

// Konfiguriere auf welche Pfade das Middleware angewendet werden soll
export const config = {
  matcher: [
    "/ueber-dimetrics",
    "/über-dimetrics",
    "/ueber-uns",
    "/über-uns",
    "/kontakt",
    "/kontakt-uns",
    "/home",
    "/index",
  ],
};
