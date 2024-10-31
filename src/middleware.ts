import { auth } from '@/auth'
import { NextResponse } from 'next/server'

const protectedRoutes = ['/dashboard', '/tests', '/account']
const LOGIN_ROUTE = '/auth/login'

export default auth((req) => {
  const pathName = req.nextUrl.pathname
  const isProtected = protectedRoutes.some((route) => pathName.startsWith(route))

  if (!isProtected) return NextResponse.next()

  if (!req.auth && req.nextUrl.pathname !== LOGIN_ROUTE) {
    console.log('redirect')
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
