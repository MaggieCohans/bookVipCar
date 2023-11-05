import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isSigned: false,
    isLoading: true,
    searchBrand: "",
    transactionStatus: -1, // https://sandbox.vnpayment.vn/apis/docs/thanh-toan-pay/pay.html#danh-s%C3%A1ch-tham-s%E1%BB%91
    inputValue: '',
    outputValue: '',
  },
  reducers: {
    updateSignIn: (state, action) => {
      state.isSigned = action.payload;
    },
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    updateSearchBrand: (state, action) => {
      state.searchBrand = action.payload;
    },
    updateTransactionStatus: (state, action) => {
      state.transactionStatus = action.payload;
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    setOutputValue: (state, action: PayloadAction<string>) => {
      state.outputValue = action.payload;
    },
    resetConversion: (state) => {
      state.inputValue = '';
      state.outputValue = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateTransactionStatus, setInputValue, setOutputValue, resetConversion, updateLoading, updateSignIn, updateSearchBrand } = appSlice.actions;

export default appSlice.reducer;
