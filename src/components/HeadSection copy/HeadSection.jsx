import { Box, Button, Container, IconButton, Typography, useMediaQuery } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Header from "../Header/Header";
import { useTheme } from "@emotion/react";

export default function HeadSection () {
    const theme = useTheme();
    const large = useMediaQuery(theme.breakpoints.up("lg"));
    const small = useMediaQuery(theme.breakpoints.up("sm"));

    return(
        <Box sx={{
            height: {xs:'auto', sm:'100vh'},
            background: {
                xs: 'common.black', 
                sm: 'linear-gradient(to right, rgba(20, 20, 20, 1) 0%, rgba(20, 20, 20, 1) 45%, rgba(255, 255, 255, 1) 45%, rgba(255, 255, 255, 1) 100%)'
            }
        }}>
            <Header/>

            <Box sx={{
                height: 'inherit',
                display:'flex', 
                justifyContent:{xs: 'start', md: 'end'}, 
                height: {xs:'auto', sm:'80vh'} ,
                flexDirection: {xs: 'column-reverse', md:'row'}
            }}>

                {/* content */}
                <Container maxWidth="lg" sx={{height: 'inherit' ,display:'flex', alignItems:'center',}}>
                    <Box sx={{
                        position:'relative',
                        alignSelf: {xs: 'start', sm: 'end', md:'center'},
                        width:{xs:'auto', sm: '100%', md: '70%'},
                        zIndex:50
                    }}>
                        {/* social media */}
                        <Box sx={{
                        position:'absolute',
                        left: '-9%',
                        top: '25%',
                        display: {xs:'none', xl: 'flex'},
                        flexDirection: 'column',
                        alignItems: 'center',
                        
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
                        backgroundColor:{xs:'rgba(0, 0, 0, 0.0)', sm:'rgba(0, 0, 0, 0.5)', md:'rgba(0, 0, 0, 0.15)'}, 
                        width:{xs:'auto', sm:'50%'}, 
                        ml: {xs:'auto', sm:'auto', md:'10%', lg:'0'},
                        mr: {xs:0, sm:"auto"},
                        paddingTop:'32px',
                        paddingBottom:'32px',
                        display:'flex',
                        flexDirection:'column',
                        pr:'20px',
                        paddingLeft: {xs: '24px', md: 0},
                        zIndex:10
                    }}>
                        <Typography variant={large ? "h1" : small ? "h2" : "h4"}>Enjoy your life with our comfortable cars.</Typography>
                        <Box sx={{
                            fontSize:{xs:14, md: 16, lg: 24}, 
                            marginTop:'15px'
                        }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Box>
                        <Button variant="contained" sx={{
                            maxWidth: 256,
                            minWidth: 140,
                            width: {xs: 0.5, md: 0.5, lg: 1},
                            fontSize:{xs: 14, md: 20, lg: 24},
                            textTransform:'capitalize',
                            marginTop: '48px',
                        }}>
                            Explore Now
                        </Button>
                        </Box>
                    </Box>
                </Container>


                <Box sx={{
                    alignSelf: {xs: 'start', sm: 'center'},
                    position:'absolute',
                    maxWidth:{xs: '100%', md: '70%'},
                    '&::after': {
                        position: 'absolute',
                        content:'""',
                        height:'100%',
                        width:'100%',
                        top:0,
                        left:0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        opacity: {xs:1, sm:0}
                    },
                }}>
                    <img src="img/main.jpg" alt="main img" style={{width:'100%'}} />
                </Box>
            </Box>
        </Box>
    );
}