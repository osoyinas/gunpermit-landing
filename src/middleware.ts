import { auth } from '@/auth'
import { NextResponse } from 'next/server'

const protectedRoutes = ['/dashboard', '/tests', '/account', '/topics']
const LOGIN_ROUTE = '/auth/login'
const AUTH_ROOT = '/auth/'

export default auth((req) => {
  const pathName = req.nextUrl.pathname
  const isProtected = protectedRoutes.some((route) => pathName.startsWith(route))

  // Check if the user is authenticated and redirect to the dashboard if the user is trying to access auth routes
  if (req.auth && req.nextUrl.pathname.startsWith(AUTH_ROOT)) {
    const newUrl = new URL('/dashboard', req.nextUrl.origin)
    return Response.redirect(newUrl)
  }

  // If the route is not protected, continue
  if (!isProtected) return NextResponse.next()

  if (!req.auth && req.nextUrl.pathname !== LOGIN_ROUTE) {
    const newUrl = new URL(LOGIN_ROUTE, req.nextUrl.origin)
    newUrl.searchParams.set('callbackUrl', req.nextUrl.href)
    return Response.redirect(newUrl)
  }
})

export const config = {
  matcher: [/*
    * Match all request paths except for the ones starting with:
    * - api (API routes)
    * - _next/static (static files)
    * - _next/image (image optimization files)
    * - favicon.ico, sitemap.xml, robots.txt (metadata files)
    */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)']
}
