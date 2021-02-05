import * as React from 'react'
import './TextFilter.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

interface TextFilterProps {
  onChangeFilter: (value: string) => void
}

export const TextFilterText = {
  inputPlaceHolder: 'Search by text...'
} as const

export const TextFilter: React.FC<TextFilterProps> = ({ onChangeFilter }) => {
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
    <section className="TextFilter">
      <input type="text" name="Filter" placeholder={TextFilterText.inputPlaceHolder} onChange={handleChangeFilter} value={filter}/>
      {hasValue && <button className="clean-search" onClick={cleanFilter} ><FontAwesomeIcon icon={faTimes} size="xs" aria-label="clean-search"/></button>}
      <FontAwesomeIcon icon={faSearch} aria-label="search"/>
    </section>
  )
}
