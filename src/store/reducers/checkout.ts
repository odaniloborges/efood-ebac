import { createSlice } from '@reduxjs/toolkit'

type CheckoutState = {
  isOpen: boolean
  completed: boolean
}

const initialState: CheckoutState = {
  isOpen: false,
  completed: false
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    openCheckout: (state) => {
      state.isOpen = true
    },
    closeCheckout: (state) => {
      state.isOpen = false
    },
    closeConfirmation: (state) => {
      state.completed = true
    }
  }
})

export const { openCheckout, closeCheckout, closeConfirmation } =
  checkoutSlice.actions
export default checkoutSlice.reducer
