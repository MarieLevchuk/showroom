import {updateLoadState, loadData} from "./carSlice.js";

export function carByIdLoad(id) {
    return async function carByIdLoadThunk(dispatch, getState) {
        try {
            dispatch (updateLoadState({ state: 1, error: null }));

            const response = await fetch(`http://localhost:3000/cars/${id}?_embed=specifications`);

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