import { createSlice } from "@reduxjs/toolkit";
import buildsData from '../builds.json';

const initialState = {
    builds: buildsData,
}

export const buildsSlice = createSlice({
    name: 'builds',
    initialState,
    reducers: {
        addBuild: (state, action) => {
            state.builds.push(action.payload);
        },
    }
});

export const { addBuild } = buildsSlice.actions;

export default buildsSlice.reducer;