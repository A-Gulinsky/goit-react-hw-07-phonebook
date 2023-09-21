import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      
      const response = await fetch('https://650c297a47af3fd22f672e78.mockapi.io/contacts')

      if (!response.ok) {
        throw new Error(`Fetch Error`)
      }

      const data = await response.json()

      return data

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function (id, { rejectWithValue }) {
    try {

      const response = await fetch(`https://650c297a47af3fd22f672e78.mockapi.io/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type':'application/json'
        }
      })

      if (!response.ok) {
        throw new Error(`delete Error`)
      }

      const data = await response.json()

      return data

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async function ({name,phone}, { rejectWithValue }) {

    try {
      
      const contact = {
        name,
        phone
      }

      const response = await fetch('https://650c297a47af3fd22f672e78.mockapi.io/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
      })

      if (!response.ok) {
        throw new Error('Something goes wrong...')
      }

      const data = await response.json()

      return data
      
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)