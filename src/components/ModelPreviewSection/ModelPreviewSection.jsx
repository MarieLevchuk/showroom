import { Box, Container, LinearProgress } from "@mui/material";
import ModelPreview from "./ModelPreview";

import ConfigurationForm from "./ConfigurationForm";
import SectionHeader from "../SectionHeader/SectionHeader";
import { useDispatch, useSelector } from "react-redux";
import { carByIdLoad } from "../../redux/carByIdLoad";
import { useEffect } from "react";

const model = { id: 1, name: 'Model A', img: '2.webp', year:2019,  persons:5, body:'sedan', fuel: 'Electric', price:179050, isConfigurable: true };
const info = { id: 1, engine: '4.0 V8', transmission: 'automatic' };


export default function ModelPreviewSection({cid}){
    const carData = useSelector(state => state.car);
    const dispatch = useDispatch();

    function loadData(id){
       dispatch(carByIdLoad(id));
    }

    useEffect(() => {
        loadData(cid);
    }, []);
    
    // const memoizedCar = useMemo(()=>{
    //     return carData.cars?.data.map(model => <CarCard key={model.id} model={model}/> )
    // }, [carData.car]);

    // console.log(carsData.cars.length/perpage);
    

    // render
    if(carData.dataLoadState === 0){
        return <Box sx={{minHeight:'70vh'}}>no data</Box>
    }
    if(carData.dataLoadState === 1){
        return <Box sx={{minHeight:'70vh', width:'100%'}}>loading...<LinearProgress /></Box>
    }
    if(carData.dataLoadState === 3){
        return <Box sx={{minHeight:'70vh'}}>error: {carData.dataLoadError}</Box>
    }

    const model = carData.car;
    // console.log(carData.car);
    

    return(
        <Box py='100px'>
            <Container maxWidth='lg'>
                <SectionHeader title={model.name} />
                <ModelPreview model={model} info={model.specifications[0]}/>
                {/* {
                    (model.isConfigurable)&&
                    <ConfigurationForm />
                } */}
            </Container>
        </Box >
    );
}