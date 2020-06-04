import * as React from 'react';
import './SearchBar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
  types: string[],
  onChangeSelectedTypes: (selectedTypes: string[]) => void
  onChangeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type CheckboxItem = { value: string; isChecked: boolean };

export const SearchBar: React.FC<SearchBarProps> = ({
  types,
  onChangeSelectedTypes,
  onChangeFilter
}) => {

  const transformToCheckbox = (item: string) => ({value:item ,isChecked: false });

  const [checkboxTypes, setCheckboxTypes] = React.useState(types.map(transformToCheckbox))
  const [toggled, setToggled] = React.useState(false);

  React.useEffect(() => {
    const getValueFromCheked = (total:string[], checkboxType: CheckboxItem) =>
      checkboxType.isChecked
        ? [...total, checkboxType.value]
        : total;
    onChangeSelectedTypes(checkboxTypes.reduce(getValueFromCheked, []));
  }, [checkboxTypes])

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxTypes(checkboxTypes.map((checkboxType) =>
      event.target.value === checkboxType.value
      ? {...checkboxType, isChecked: !checkboxType.isChecked}
      : checkboxType
    ));
  }

  return (
    <section className="SearchBar">

      <section className="type-filter">
        <button onClick={() => setToggled(!toggled)}>
          <FontAwesomeIcon icon={faFilter} aria-label="Filter By"/>
          {` Filter`}
        </button>
        {
          toggled && <div aria-label="Filter by types">
            <ul>
            <h3>Type</h3>
            {
              checkboxTypes.map((checkboxType) => (
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value={checkboxType.value}
                      checked={checkboxType.isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <div className="checkbox" >
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <span>{checkboxType.value}</span>
                  </label>
                </li>))
            }
            </ul>
          </div>
        }
      </section>

      <section className="text-filter">
        <input type="text" name="Filter" placeholder="Search by text..." onChange={onChangeFilter}/>
        <FontAwesomeIcon icon={faSearch}/>
      </section>

      <section>

      </section>
    </section>
  );
};
