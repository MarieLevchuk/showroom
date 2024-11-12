import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Header from "../Header/Header";

export default function HeadSection () {
    return(
        <Box sx={{height: '100vh'}}>
            <Header/>

            {/* black box */}
            <Box sx={{
                backgroundColor:'common.black', 
                width:'43%', height: '100vh', 
                position: 'fixed',
                top: 0,
                left:0,
                zIndex:'-1000'
            }}></Box>

            {/* content */}
            <Container maxWidth="lg" >
                <Box sx={{
                    mt:'46px',
                    position:'relative',
                }}>
                    {/* social media */}
                    <Box sx={{
                        position:'absolute',
                        left: '-9%',
                        top: '25%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Box mb={3} sx={{height:38, width:'1px', backgroundColor:'primary.main'}}></Box>
                        <IconButton aria-label="facebook" color="primary">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="facebook" color="primary">
                            <InstagramIcon />
                        </IconButton>
                        <IconButton aria-label="facebook" color="primary">
                            <WhatsAppIcon />
                        </IconButton>
                        <IconButton aria-label="facebook" color="primary">
                            <LinkedInIcon />
                        </IconButton>
                        <Box mt={3} sx={{height:38, width:'1px', backgroundColor:'primary.main'}}></Box>
                    </Box>

                    {/* title */}
                    <Box sx={{ 
                        color: '#fff',
                        backgroundColor: 'rgba(0, 0, 0, 0.15)', 
                        width:'40%', 
                        maxWidth:'40%',
                        marginTop:15,
                        paddingTop:'32px',
                        paddingBottom:'32px',
                        display:'flex',
                        flexDirection:'column'
                    }}>
                        <Typography variant="h1">Enjoy your life with our comfortable cars.</Typography>
                        <Box sx={{fontSize:24, marginTop:'15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Box>
                        <Button variant="contained" sx={{
                            width: 256,
                            fontSize:24,
                            textTransform:'capitalize',
                            marginTop: '48px',
                        }}>
                            Explore Now
                        </Button>
                    </Box>
                    
                </Box>
                <Box sx={{
                        position:'absolute',
                        right:0,
                        top:'103px',
                        zIndex:-100,
                        maxWidth:'60%'
                    }}>
                        <img src="img/main.jpg" alt="main img" style={{maxWidth:'100%'}} />
                </Box>
            </Container>
        </Box>
    );
}