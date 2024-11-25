import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    dataLoadState: 0, // 0 - not loaded, 1 - is loading, 2 - loaded, 3 - error
    dataLoadError: null,

    car: null,
}

export const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        updateLoadState: (state, action) => {
            state.dataLoadState = action.payload.state;
            state.dataLoadError = action.payload.error;
        },
        loadData: (state, action) => {
            state.car = action.payload;
        },
    }
});

export const { updateLoadState, loadData } = carSlice.actions;

export default carSlice.reducer;