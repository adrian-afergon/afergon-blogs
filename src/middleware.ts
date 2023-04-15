import {NextRequest, NextResponse} from "next/server";

export const middleware = (req: NextRequest, res: NextResponse) => {
    // do something
    console.log('locale middleware', req.nextUrl.locale)
    console.log('url', req.url)

    const PUBLIC_FILE = /\.(.*)$/

    if (
      req.nextUrl.pathname.startsWith('/_next') ||
      req.nextUrl.pathname.includes('/api/') ||
      PUBLIC_FILE.test(req.nextUrl.pathname)
    ) {
        return
    }

    if (req.nextUrl.locale === 'default') {
        const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en'
        console.log('default locale', locale)
        return NextResponse.redirect(
            new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
        )
    }

    return NextResponse.next()
}

