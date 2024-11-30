import { useDispatch, useSelector } from "react-redux";
import TestDriveForm from "./TestDriveForm";
import { carsLoad } from "../../redux/carsLoad.js";
import { useEffect, useMemo } from "react";

export default function TestDriveFormWrapper(){
    const carsData = useSelector(state => state.cars);
    const dispatch = useDispatch();

    function loadData(){
        dispatch(carsLoad);
    }

    useEffect(() => {
        loadData();
    }, []);

    // const memoizedCars = useMemo(()=>{
    //     return carsData.cars.map(model => <CarCard key={model.id} model={model}/> )
    // }, [carsData.cars]);

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
        <>
            <TestDriveForm models={carsData.cars}/>
        </>
    )
}