import {updateLoadState, loadData} from "./carsSlice.js";

export function carsLoad(page) {
    return async function carsLoadThunk(dispatch, getState) {
        try {
            dispatch (updateLoadState({ state: 1, error: null }));

            const response = await fetch(`http://localhost:3000/cars?_page=${page}&_limit=9&_embed=specifications`);
            
            if(response.ok){
                const data = await response.json();
                const paginationData = {
                    page: page,
                    first: getLinkByRelFromLinkHeader(response.headers.get( "Link" ), 'first'),
                    prev: getLinkByRelFromLinkHeader(response.headers.get( "Link" ), 'prev'),
                    next: getLinkByRelFromLinkHeader(response.headers.get( "Link" ), 'next'),
                    last: getLinkByRelFromLinkHeader(response.headers.get( "Link" ), 'last'),
                    data: data
                }
                
                dispatch(updateLoadState({ state: 2, error: null }));
                dispatch(loadData(paginationData));
            } else {
                dispatch(updateLoadState({ state: 3, error: "HTTP error "+ response.status }));
            }
        } catch (error) {
            dispatch(updateLoadState({ state: 3, error: error.message}));
        }
    }
}


function getLinkByRelFromLinkHeader(header, rel){
    
    const link = header.match(new RegExp(`<([^>]+)>; rel="${rel}"`));
    if(link){
        const pageRegexp = /_page=(\d+)/
        const page = link[1].match(pageRegexp)
        if(page){
            return +page[1];
        }
    }

    return null;    
}