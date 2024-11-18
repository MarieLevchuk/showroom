import { Box, Container } from "@mui/material";
import Social from "../Social/Social";

export default function Footer(){
    return(
        <Box bgcolor='black' py={2}>
            <Container maxWidth="lg" >
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Social/>
                </Box>
            </Container>
        </Box>
    );
}