import {Resources} from '../../views/resources/resources'
import {getResources} from "@/lib/resources/infrastructure/resources.repository";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

// @ts-ignore
export async function getServerSideProps({locale, res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const resources = await getResources()


  return {
    props: {
      resources,
      ...(await serverSideTranslations(locale ?? 'en', [
        'resources', 'common'
      ])),
    }
  }
}

export default Resources
