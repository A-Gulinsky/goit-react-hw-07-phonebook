// emotion/prop-types
import PropTypes from 'prop-types'
import { Label, P, Input } from './Filter.styled'

// redux
import { useDispatch } from 'react-redux'
import { filter } from 'redux/filterSlice'

const Filter = () => {
  
  // redux
  const dispatch = useDispatch()

  // change redux state filter
  const handleChangeValue = e => dispatch(filter(e.target.value))

  return (
    <Label>
      <P>Search by filter</P>
      <Input type="text" onChange={handleChangeValue}/>
    </Label>
  )
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default Filter