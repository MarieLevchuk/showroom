import { Box } from "@mui/material";
import CarCard from "../CarCard/CarCard";

import { useDispatch, useSelector } from "react-redux";
import { featuredCarsLoad } from "../../redux/featuredCarsLoad";
import { useEffect, useMemo, useState } from "react";

export default function FeaturedCars(){

    const carsData = useSelector(state => state.featuredCars);
    const dispatch = useDispatch();

    function loadData(){
        dispatch(featuredCarsLoad);
    }

    useEffect(() => {
        loadData();
    }, []);

    const memoizedCars = useMemo(()=>{
        return carsData.cars.map(model => <CarCard key={model.id} model={model}/> )
    }, [carsData.cars]);

    // render
    if(carsData.dataLoadState === 0){
        return <>no data</>
    }
    
    if(carsData.dataLoadState === 1){
        return <>loading...</>
    }
    if(carsData.dataLoadState === 3){
        return <>error: {carsData.dataLoadError}</>
    }

    return(
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
    );
}