import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    dataLoadState: 0, // 0 - not loaded, 1 - is loading, 2 - loaded, 3 - error
    dataLoadError: null,

    cars: [],
}

export const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        updateLoadState: (state, action) => {
            state.dataLoadState = action.payload.state;
            state.dataLoadError = action.payload.error;
        },
        loadData: (state, action) => {
            state.cars = action.payload;
        },
    }
});

export const { updateLoadState, loadData } = carsSlice.actions;

export default carsSlice.reducer;