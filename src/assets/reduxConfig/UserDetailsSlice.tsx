import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DataState {
  userType: string;
}

const initialState: DataState = {
  userType: 'Seller',
};

const DataSlice = createSlice({
  name: 'DataSlice',
  initialState,
  reducers: {
    SAVE_USER_TYPE: (state, action: PayloadAction<string>) => {
      console.log(state, 'state');
      state.userType = action.payload;
    },
  },
});

export const {SAVE_USER_TYPE} = DataSlice.actions;
export default DataSlice.reducer;
