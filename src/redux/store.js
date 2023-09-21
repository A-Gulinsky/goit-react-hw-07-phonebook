import { configureStore } from '@reduxjs/toolkit'

import { persistStore, REGISTER } from 'redux-persist'

import { filterSlice } from './filterSlice'

import { contactsReducer } from './contactsSlice'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [REGISTER]
      }
    })
  }
})

export const persistor = persistStore(store)