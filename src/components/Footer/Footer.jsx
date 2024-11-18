import { Box, Container } from "@mui/material";
import Social from "../Social/Social";

export default function Footer(){
    return(
        <Box bgcolor='common.black' py={2} sx={{position:'relative'}}>
            <Box
                sx={{
                    position:'absolute',
                    top:-40,
                    height:40,
                    width:'100%',
                    bgcolor:'common.black',
                    zIndex:-100
                }}
            />
            <Container maxWidth="lg" >
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Social/>
                </Box>
            </Container>
        </Box>
    );
}