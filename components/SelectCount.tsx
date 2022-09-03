import Select from 'react-select';

const options = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '5', label: '5' },
  { value: '10', label: '10' },
]

const SelectCount = ({ handleChange }: any ) => {

  return (
    <Select
        className='w-full mb-8 cursor-pointer'
        onChange={e => handleChange(e)}
        options={options}
      />
  )
}

export default SelectCount;