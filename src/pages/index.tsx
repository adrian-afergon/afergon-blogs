import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Home from "@/pages/home";

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
