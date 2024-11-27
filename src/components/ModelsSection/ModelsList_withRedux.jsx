import { Box, LinearProgress, Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { carsLoad } from "../../redux/carsLoad.js";
import { useEffect, useMemo, useState } from "react";
import CarCard from "../CarCard/CarCard.jsx";
import filterEvents from "../../events/filterEvents";

// async function getFilteredData(filterData) {
//     const response = await fetch("http://fe.it-academy.by/TestFetch.php", {
//         method: 'get',
//         headers: {
//           "Accept": "application/json",
//         },
//         });

//     if( !response.ok ){
//       throw new Error("fetch error " + response.status);
//     }
//     return response.json();
// }

const perpage = 9;

export default function ModelsList(){
    const carsData = useSelector(state => state.cars);
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    function loadData(page){
       dispatch(carsLoad(page));
    }

    useEffect(() => {
        loadData(page);

        filterEvents.addListener('filter', filter);
        return () => {
            filterEvents.removeListener('filter', filter);
        }
    }, []);

    const filter = (filterData) => {
        console.log(filterData);
        
    }
    
    useEffect(() => {
        loadData(page);
    }, [page]);

    const memoizedCars = useMemo(()=>{
        return carsData.cars?.data.map(model => <CarCard key={model.id} model={model}/> )
    }, [carsData.cars]);

    // console.log(carsData.cars.length/perpage);
    

    // render
    if(carsData.dataLoadState === 0){
        return <Box sx={{minHeight:'70vh'}}>no data</Box>
    }
    // if(carsData.dataLoadState === 1){
    //     return <Box sx={{minHeight:'70vh', width:'100%'}}>loading...<LinearProgress /></Box>
    // }
    if(carsData.dataLoadState === 3){
        return <Box sx={{minHeight:'70vh'}}>error: {carsData.dataLoadError}</Box>
    }

    return (
        <>
            <Box mt={4} sx={{display:'flex', justifyContent:"center"}}>
                <Pagination count={carsData.cars?.last} page={page} onChange={(e, value) => setPage(value)} />
            </Box>
            <Box mx='auto' sx={{height:20, minHeight:20, width:'90%'}}>
            {
                (carsData.dataLoadState === 1)&&
                <Box sx={{width:'100%'}}>loading...<LinearProgress /></Box>
            }
            </Box>
            
            <Box
                sx={{
                    display: 'flex',
                    justifyContent:'center',
                    flexWrap:'wrap',
                    gap: {xs:1, sm: 4}
                }}
            >
                { memoizedCars }
            </Box>
        </>
    );
}