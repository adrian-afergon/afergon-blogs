import {Resources} from '../../views/resources/resources'
import {getResources} from "@/lib/resources/infrastructure/resources.repository";

// @ts-ignore
export async function getServerSideProps({_, res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const resources = await getResources()


  return {props: {resources}}
}

export default Resources