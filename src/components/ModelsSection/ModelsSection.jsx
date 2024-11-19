import { Box, Container, Pagination } from "@mui/material";
import Filter from "./Filter";
import ModelsList from "./ModelsList";
import SectionHeader from "../MainSection/SectionHeader";

export default function ModelsSection(){
    return(
        <Box py='100px'>
            <Container maxWidth='lg'>
                <SectionHeader title='All Models' />
                <Filter/>
                <ModelsList/>
                <Box mt={4} sx={{display:'flex', justifyContent:"center"}}>
                    <Pagination count={10} />
                </Box>
            </Container>
        </Box >
    );
}