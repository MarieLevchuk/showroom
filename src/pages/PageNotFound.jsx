import { Box, Typography } from "@mui/material";

export default function PageNotFound(){
    return(
        <Box py='100px' sx={{minHeight:'100vh', textAlign:'center'}}>
            <Box mt='20%' sx={{}}><Typography my='auto' variant="h3">404 | page not found</Typography></Box>
        </Box>
    );
}