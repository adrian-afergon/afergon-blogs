import * as React from 'react'
import styles from './TypeFilter.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faFilter } from '@fortawesome/free-solid-svg-icons'
import { useClickOutside } from '@/hooks/useClickOutside'
import {useTranslation} from "next-i18next";

interface TypeFilterProps {
  types: string[],
  onChangeSelectedTypes: (selectedTypes: string[]) => void
}

type CheckboxItem = { value: string; isChecked: boolean };

export const TypeFilterText = {
  filterModal: 'Filter by types'
} as const

export const TypeFilter: React.FC<TypeFilterProps> = ({ types, onChangeSelectedTypes }) => {
  const {t} = useTranslation('common')
  const transformToCheckbox = (item: string) => ({ value: item, isChecked: false })
  const [checkboxTypes, setCheckboxTypes] = React.useState(types.map(transformToCheckbox))
  const [toggled, setToggled] = React.useState(false)
  const wrapperRef = React.useRef(null)
  useClickOutside(wrapperRef, () => setToggled(false))

  const getValueFromChecked = (total:string[], checkboxType: CheckboxItem) =>
    checkboxType.isChecked
      ? [...total, checkboxType.value]
      : total

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const types = checkboxTypes.map((checkboxType) =>
      event.target.value === checkboxType.value
        ? { ...checkboxType, isChecked: !checkboxType.isChecked }
        : checkboxType
    )
    setCheckboxTypes(types)
    onChangeSelectedTypes(types.reduce(getValueFromChecked, []))
  }

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    setToggled(!toggled)
  }

  return (
    <section className={styles.TypeFilter} ref={wrapperRef}>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faFilter} aria-label={t('components.filter.label') ?? 'Filter by'}/>
        {` ${t('components.filter.text')}`}
      </button>
      {
        toggled && <div aria-label={t('components.filter.description') ?? TypeFilterText.filterModal} >
          <ul >
            <h3>{t('components.filter.type')}</h3>
            {
              checkboxTypes.map((checkboxType) => (
                <li key={checkboxType.value}>
                  <label>
                    <input
                      type="checkbox"
                      value={checkboxType.value}
                      checked={checkboxType.isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <div className={styles.checkbox}>
                      <FontAwesomeIcon icon={faCheck}/>
                    </div>
                    <span>{t(`types.${checkboxType.value.toLocaleLowerCase()}`)}</span>
                  </label>
                </li>))
            }
          </ul>
        </div>
      }
    </section>
  )
}
