import { createSlice } from '@reduxjs/toolkit'
import { SellerState } from '../types/seller.types'

const initialState: SellerState = {
  seller: {
    businessName: '',
    businessNameArabic: '',
    shopName: '',
    shopNameArabic: '',
    regNumber: '',
    email: '',
    url: '',
    country: 'SA',
    dialCode: '+966',
    bussinessAddress: '',
  },
  loading: false,
  error: '',
}

const SelllerSlice = createSlice({
  name: 'SelllerSlice',
  initialState: initialState,
  reducers: {
    saveDraftRequest(state, action) {},
    saveDraftSuccess(state, action) {},
    saveDraftError(state, action) {},
  },
})

export const {
  saveDraftRequest,
  saveDraftSuccess,
  saveDraftError,
} = SelllerSlice.actions
export default SelllerSlice.reducer
