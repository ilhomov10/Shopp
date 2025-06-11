import Select, { SingleValue } from 'react-select'
import { useDispatch } from 'react-redux'
import { setSort } from '../store/products'
import { AppDispatch } from '../store'

interface IOption {
  value: '' | 'title' | 'price' | 'rating'
  label: string
}

const options: IOption[] = [
  { value: '', label: 'Default' },
  { value: 'title', label: 'Title' },
  { value: 'price', label: 'Price' },
  { value: 'rating', label: 'Rating' }
]

const Sort: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  const changeOption = (selectedOption: SingleValue<IOption>) => {
    if (selectedOption) {
      dispatch(setSort(selectedOption.value))
    }
  }

  return (
    <div className="select-wrapper">
      <Select
        className="select"
        options={options}
        onChange={changeOption}
        placeholder="Sort by:"
        defaultValue={options[0]}
        isClearable={false}
        menuPortalTarget={document.body}
        styles={{
          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        }}
      />
    </div>
  )
}

export default Sort
