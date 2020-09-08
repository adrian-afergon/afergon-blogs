import { LocaleResource } from "../../models/locale-resource";

export const buildLocaleResource = ({
  link = 'http://irrelevant.link',
  locale = 'irrelevant'
}: Partial<LocaleResource>): LocaleResource => ({
  locale,
  link
})
