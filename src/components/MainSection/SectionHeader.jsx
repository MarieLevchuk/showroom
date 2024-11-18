import { Box, Container, Divider, Typography } from "@mui/material";

export default function SectionHeader({title}){
    return(
        <Box
            sx={{
                textAlign:'center',
                my:4
            }}
        >
            <Container maxWidth='lg'>
                <Typography variant="h3" color="common.black" sx={{textTransform:'capitalize'}}>
                    {title}
                </Typography>                          
                <Box mx={'auto'} mt={2} sx={{width:50, height:'2px', backgroundColor:'primary.main'}}></Box>
            </Container>
        </Box>
    );
}