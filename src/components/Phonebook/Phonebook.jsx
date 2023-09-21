// react hook form/emotion
import { useForm } from "react-hook-form"
import { Form, P, Input, Button } from "components/Phonebook/Phonebook.styled"

// inputSettings
import { NameOptions, NumberOptions } from "./InputField"

// redux
import { useDispatch, useSelector } from "react-redux"
import { getContacts } from "redux/contactsSlice"
import { addContact } from "redux/API"

function Phonebook() {

  // redux
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch()
  
  // react hook form
  const { register, handleSubmit, formState: { errors },reset } = useForm({
    defaultValues: {
      name: '',
      phone: ''
    }
  })

  // using dispatch in this func.
  const onSubmit = (data) => {
    
    if (contacts.some(contact => data.name === contact.name)) {
      return alert(`${data.name} is already in contacts`)
    }
    
    dispatch(addContact(data))
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>

      <Input
        autoComplete="off"
        {...register("name", NameOptions)}
        style={{ borderColor: errors.name ? 'red' : 'initial' }}
        placeholder="Name"
      />
      {errors.name && <P>{errors.name.message}</P>}

      <Input
        autoComplete="off"
        {...register("phone", NumberOptions)}
        style={{ borderColor: errors.number ? 'red' : 'initial' }}
        placeholder="Number"
      />
      {errors.number && <P>{errors.number.message}</P>}

      <Button type="submit" value="Add Contact" />
      
    </Form>
  )
}

export default Phonebook