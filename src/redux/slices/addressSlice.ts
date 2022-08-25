import { createSlice } from '@reduxjs/toolkit';

const AdressSlice = createSlice({
  name: 'Address Slice',
  initialState: {
    loading:false,
    isError:false,
    countries: [],
    states:[],
    cities:[]
  },
  reducers: {
    getCountriesListRequest(state, action) {
      return {
        ...state,
        loading:true
      }
    },
    getCountriesListSuccess(state, action) {
        return { ...state, countries: action.payload,loading:false };
      },
    getCountriesListError(state) {
        return { ...state,isError:true,loading:false };
    },
    getCountryStatesListRequest(state, action){
        return {
            ...state,
            loading:true
          }
    },
    getCountryStatesListSuccess(state, action){
        return {
            ...state,
            states:action.payload,
          }
    },
    getCountryStatesListError(state){
        return { ...state,isError:true,loading:false };
    },
    getStateCitiesListRequest(state, action){
        return {
            ...state,
            loading:true
          }
    },
    getStateCitiesListSuccess(state, action){
        return {
            ...state,
            cities:action.payload,
          }
    },
    getStateCitiesListError(state){
        return { ...state,isError:true,loading:false };
    }
  },
});
export const { getCountriesListRequest,getCountriesListSuccess,getCountriesListError,
    getCountryStatesListRequest,getCountryStatesListSuccess,getCountryStatesListError,
    getStateCitiesListRequest,getStateCitiesListSuccess,getStateCitiesListError
}
     = AdressSlice.actions;
export default AdressSlice.reducer;
