import {updateLoadState, loadData} from "./carsSlice.js";

export function carsLoad(page) {
    return async function carsLoadThunk(dispatch, getState) {
        try {
            dispatch (updateLoadState({ state: 1, error: null }));

            const response = await fetch(`http://localhost:3000/cars?_page=${page}&_per_page=9&_embed=specifications`);

            if(response.ok){
                const data = await response.json();
                dispatch(updateLoadState({ state: 2, error: null }));
                dispatch(loadData(data));
            } else {
                dispatch(updateLoadState({ state: 3, error: "HTTP error "+ response.status }));
            }
        } catch (error) {
            dispatch(updateLoadState({ state: 3, error: error.message}));
        }
    }
}