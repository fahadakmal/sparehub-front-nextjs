import { createSlice } from '@reduxjs/toolkit';
import { SellerState } from '../types/seller.types';

const locationInitialState = {
  incharge: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  },
  name: '',
  nameArabic: '',
  country: '0',
  state: '0',
  city: '0',
  address: '',
};

const initialState: SellerState = {
  seller: {
    companyName: '',
    companyNameAr: '',
    displayName: '',
    displayNameAr: '',
    registrationNo: '',
    email: '',
    website: '',
    country: 0,
    state: 0,
    city: 0,
    dialCode: '+966',
    address1: '',
    location: locationInitialState,
    bank: {
      bankName: '',
      accountTitle: '',
      branchCode: '',
      accountNo: '',
      iban: '',
    },
    stores: [],
    documents: [],
  },
  loading: false,
  error: '',
};

const SelllerSlice = createSlice({
  name: 'SelllerSlice',
  initialState: initialState,
  reducers: {
    saveDraftRequest(state, action) {},
    saveDraftSuccess(state, action) {},
    saveDraftError(state, action) {},

    getSellerCompanyInfoRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    getSellerCompanyInfoSuccess(state, action) {
      return {
        ...state,
        loading: false,
        seller: {
          ...state.seller,
          ...action.payload,
        },
      };
    },
    getSellerCompanyInfoError(state, action) {
      return {
        ...state,
        loading: false,
      };
    },

    getDocumentTypesRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    getDocumentTypesSuccess(state, action) {
      return {
        ...state,
        loading: false,
        documentTypes: action.payload,
      };
    },
    getDocumentTypesError(state, action) {
      return {
        ...state,
        loading: false,
        error: 'true',
      };
    },
    addLocationToWareHouse(state, action) {
      return {
        ...state,
      };
    },
    uploadFileRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    uploadFileSuccess(state, action) {
      return {
        ...state,
        loading: false,
        seller: {
          ...state.seller,
          documents: [...state.seller.documents, action.payload],
        },
      };
    },
    uploadFileError(state, action) {
      return {
        ...state,
        loading: false,
      };
    },
  },
});

export const {
  saveDraftRequest,
  saveDraftSuccess,
  saveDraftError,
  getDocumentTypesRequest,
  getDocumentTypesError,
  getDocumentTypesSuccess,
  addLocationToWareHouse,
  uploadFileRequest,
  uploadFileSuccess,
  uploadFileError,
  getSellerCompanyInfoRequest,
  getSellerCompanyInfoSuccess,
  getSellerCompanyInfoError,
} = SelllerSlice.actions;
export default SelllerSlice.reducer;
