import {NextRequest, NextResponse} from "next/server";

export const middleware = (req: NextRequest, _: NextResponse) => {
    if (req.nextUrl.locale === 'default') {
        const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en'
        return NextResponse.redirect(
            new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
        )
    }

    return NextResponse.next()
}

