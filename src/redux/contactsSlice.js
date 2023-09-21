import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {

    addContact(state, action) {
      state.items.push({
        id: shortid.generate(),
        ...action.payload
      })
    },

    deleteContact(state, action) {
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload)
      };
    }
    
  }
})

// redux-persist
const persistConfig = {
  key: 'test',
  storage
}
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer)

// methods
export const { addContact, deleteContact } = contactsSlice.actions

// Selector
export const getContacts = state => state.contacts.items