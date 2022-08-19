import { createSlice } from '@reduxjs/toolkit';

export const sellerstateSlice = createSlice({
    name: 'sellerstate',
    initialState: {
        sellerstate: [],
        isLoading: false,
    },
    reducers: {
        getstateFetch: (state,data) => {
            state.isLoading = true;
            data
        },
        getstateSuccess: (state, action) => {
            state.sellerstate = action.payload;
            state.isLoading = false;
        },
        getstateFailure: (state) => {
            state.isLoading = false;
        }
    }
});

export const { getstateFetch, getstateSuccess, getstateFailure } = sellerstateSlice.actions;
export default sellerstateSlice.reducer;