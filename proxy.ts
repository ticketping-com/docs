import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const ORIGIN = 'https://ticketping.com';

/**
 * 308 permanent redirects to ticketping.com (docs now live at /docs on the main site).
 * Skips Next.js/Vercel internals so assets keep serving from this host when needed.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname.startsWith('/_next') || pathname.startsWith('/_vercel')) {
    return NextResponse.next();
  }

  if (pathname === '/') {
    return NextResponse.redirect(`${ORIGIN}/docs${search}`, 308);
  }

  if (pathname.startsWith('/docs')) {
    return NextResponse.redirect(`${ORIGIN}${pathname}${search}`, 308);
  }

  if (pathname.startsWith('/api')) {
    return NextResponse.redirect(`${ORIGIN}${pathname}${search}`, 308);
  }

  return NextResponse.redirect(`${ORIGIN}/docs${pathname}${search}`, 308);
}

export const config = {
  matcher: ['/', '/((?!_next/|_vercel/).*)'],
};
