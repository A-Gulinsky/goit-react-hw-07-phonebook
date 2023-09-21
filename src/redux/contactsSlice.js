import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts,addContact,deleteContact } from "./API";

// pending/rejected

const setPending = (state, action) => {
  state.isLoading = true
  state.error = null
}

const setRejected = (state, action) => {
  state.isLoading = false
  state.error = action.payload
}

// initial state
const initialState = {
  items: [],
  isLoading: false,
  error: null
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {

    // fetch
    [fetchContacts.pending]: setPending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.items = action.payload
    },
    [fetchContacts.rejected]: setRejected,
    
    // delete
    [deleteContact.pending]: setPending,
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false
      state.items = state.items.filter(contact => contact.id !== action.payload.id)
    },
    [deleteContact.rejected]: setRejected,
    
    // add
    [addContact.pending]: setPending,
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false
      state.items = [...state.items,action.payload]
    },
    [addContact.rejected]: setRejected
  }
})

// Selector
export const getContacts = state => state.contacts.items