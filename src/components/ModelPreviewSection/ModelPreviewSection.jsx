import { Box, Container } from "@mui/material";
import ModelPreview from "./ModelPreview";
import SectionHeader from "../MainSection/SectionHeader";
import ConfigurationForm from "./ConfigurationForm";

const model = { id: 1, name: 'Model A', img: '2.jpg', year:2019,  persons:5, body:'sedan', fuel: 'Electric', price:179050, isConfigurable: true };
const info = { id: 1, engine: '4.0 V8', transmission: 'automatic' };


export default function ModelPreviewSection(){
    return(
        <Box py='100px'>
            <Container maxWidth='lg'>
                <SectionHeader title={model.name} />
                <ModelPreview model={model} info={info}/>
                {/* {
                    (model.isConfigurable)&&
                    <ConfigurationForm />
                } */}
            </Container>
        </Box >
    );
}