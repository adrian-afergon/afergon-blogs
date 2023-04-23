import {Home} from '../../views/home/home'
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps<{}> = async ({
                                                           locale,
                                                         }) =>
  ({
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'home', 'common'
      ])),
    },
  })
export default Home
