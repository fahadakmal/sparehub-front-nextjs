import { createSlice } from '@reduxjs/toolkit';

export const catSlice = createSlice({
    name: 'sellercountry',
    initialState: {
        sellercountry: [],
        isLoading: false,
    },
    reducers: {
        getcountryFetch: (state,data) => {
            state.isLoading = true;
            data
        },
        getcountrySuccess: (state, action) => {
            state.sellercountry = action.payload;
            state.isLoading = false;
        },
        getcountryFailure: (state) => {
            state.isLoading = false;
        }
    }
});

export const { getcountryFetch, getcountrySuccess, getcountryFailure } = catSlice.actions;
export default catSlice.reducer;