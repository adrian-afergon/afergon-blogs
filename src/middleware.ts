import {NextRequest, NextResponse} from "next/server";
import localeRoutes from "../locale-routes.json";


export const middleware = (req: NextRequest, _: NextResponse) => {
  const { origin} = new URL(req.nextUrl.href)
  const typedLocaleRoutes = localeRoutes as Record<string, Record<string, string>>
  const locale = req.nextUrl.locale;
  const routes = typedLocaleRoutes[locale] as Record<string, string>
  // @ts-ignore
  const translatedPath = routes[req.nextUrl.pathname];

  if (translatedPath && translatedPath !== req.nextUrl.pathname) {
    return NextResponse.redirect(`${origin}/${locale}${translatedPath}`)
  }
  return NextResponse.next()
}

export const config = {
  // All routes, except api, _next/static, _next/image and favicon.ico
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)', '/']
}
