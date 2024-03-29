import * as React from 'react'
import styles from './TextFilter.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import {useTranslation} from "next-i18next";

interface TextFilterProps {
  onChangeFilter: (value: string) => void
}

export const TextFilterText = {
  inputPlaceHolder: 'Search by text...'
} as const

export const TextFilter: React.FC<TextFilterProps> = ({ onChangeFilter }) => {
  const {t} = useTranslation('common');
  const [filter, setFilter] = React.useState<string>('')

  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value)
    onChangeFilter(event.target.value)
  }

  const cleanFilter = () => {
    setFilter('')
    onChangeFilter('')
  }

  const hasValue = filter.length > 0

  return (
    <section className={styles.TextFilter}>
      <input type="text" name={t('components.search.label') ?? 'Search'} placeholder={t('components.search.placeholder')??TextFilterText.inputPlaceHolder} onChange={handleChangeFilter} value={filter}/>
      {hasValue && <button className={styles.cleanSearch} onClick={cleanFilter} ><FontAwesomeIcon icon={faTimes} size="xs" aria-label="clean-search"/></button>}
      <FontAwesomeIcon icon={faSearch} aria-label={t('components.search.label') ?? 'Search'}/>
    </section>
  )
}
