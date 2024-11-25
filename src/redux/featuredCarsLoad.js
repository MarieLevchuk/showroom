import {updateLoadState, loadData} from "./featuredCarsSlice.js";

export async function featuredCarsLoad(dispatch) {
    try {
        dispatch (updateLoadState({ state: 1, error: null }));

        const response = await fetch("http://localhost:3000/cars?year_gt=2024&_limit=3&_embed=specifications");

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