import { useParams } from "react-router-dom";
import ModelPreviewSection from "../components/ModelPreviewSection/ModelPreviewSection";
import { Box } from "@mui/material";

export default function PageCar(){
    const params = useParams();
    const carId = parseInt(params.cid);
    return(
        <Box  sx={{minHeight:'100vh'}}>
            <ModelPreviewSection cid={carId}/>
        </Box>
    );
}