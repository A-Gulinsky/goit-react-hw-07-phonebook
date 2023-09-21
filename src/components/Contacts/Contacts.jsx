// emotion/prop-types
import PropTypes from 'prop-types'
import { Ul, Li, Name, Number, Button } from './Contacts.styled'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from 'redux/API'
import { getContacts } from 'redux/contactsSlice'
import { getFilter } from 'redux/filterSlice'

const Contacts = () => {

  // Reducers,dispatch
  const contactsReducer = useSelector(getContacts)
  const filterReducer = useSelector(getFilter)
  const dispatch = useDispatch()
  
  // get filtered contacts
  const getFilteredContacts = () => {
    const normalizedFilter = filterReducer.toLowerCase()
    
    return contactsReducer.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

  return (
    <Ul>
      {getFilteredContacts().map(({ id, name, phone }) => (

        <Li key={id}>
          <Name>{name} :</Name>
          <Number>{phone}</Number>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>delete</Button>
        </Li>
        
      ))}
    </Ul>
  )
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }))
}

export default Contacts