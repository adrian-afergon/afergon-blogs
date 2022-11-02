import { LocaleResource } from '@/lib/common/domain/locale-resource'

export const buildLocaleResource = ({
  link = 'http://irrelevant.link',
  locale = 'irrelevant'
}: Partial<LocaleResource>): LocaleResource => ({
  locale,
  link
})
