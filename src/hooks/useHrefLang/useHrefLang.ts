import localeRoutes from '../../../locale-routes.json';

export const calculateHrefLang = (locale: string, path: string) => {
  return Object.entries(localeRoutes)
    .filter(([localeKey]) => localeKey !== locale)
    .map(([localeKey, routes]) => {
      // @ts-ignore
      const translatedRoute = routes[path]
      return {
        locale: localeKey,
        path: translatedRoute,
      }
    })
}
