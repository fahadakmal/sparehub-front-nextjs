import { createSlice } from "@reduxjs/toolkit";


const phoneForgtpassSlice = createSlice({
	name: 'Phone number slice',
	initialState: {
		userData: [],
	},
	reducers: {
		getAllUser() {
			console.log('meow');
		},
		setUsers: (state, action) => {
			return { ...state, userData: action.payload };
		},
	},
});

export const { getAllUser, setUsers } = phoneForgtpassSlice.actions;
export default phoneForgtpassSlice.reducer;
