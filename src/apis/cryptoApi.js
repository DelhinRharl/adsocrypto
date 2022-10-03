import { createSlice } from "@reduxjs/toolkit";

export const cryptoSlice = createSlice({
    name: "crypto",
    initialState: {
        cryptoCurrencies: [],
        myCryptoCurrencies: [],
        status: "idle",
        error: null,
    },
    reducers: {
        getCryptoCurrencies: (state, action) => {
            state.cryptoCurrencies = action.payload;
        }
    }
});

export const { getCryptoCurrencies } = cryptoSlice.actions;
export default cryptoSlice.reducer;
