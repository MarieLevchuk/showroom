import { Box, Button, Container, IconButton, Typography, useMediaQuery } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Header from "../Header/Header";
import { useTheme } from "@emotion/react";

export default function HeadSection () {
    const theme = useTheme();
    const large = useMediaQuery(theme.breakpoints.up("lg"));
    const medium = useMediaQuery(theme.breakpoints.up("md"));
    const small = useMediaQuery(theme.breakpoints.up("sm"));
    const xsmall = useMediaQuery(theme.breakpoints.up("xs"));

    const ismedium = useMediaQuery(theme.breakpoints.only("md"));
    const issmall = useMediaQuery(theme.breakpoints.only("sm"));
    const downsmall = useMediaQuery(theme.breakpoints.down("sm"));
    

    return(
        <Box sx={{
            height: '100vh',
            background: {
                xs: 'rgba(255, 255, 255, 1)', 
                sm: 'linear-gradient(to right, rgba(20, 20, 20, 1) 0%, rgba(20, 20, 20, 1) 45%, rgba(255, 255, 255, 1) 45%, rgba(255, 255, 255, 1) 100%)'
            }
        }}>
            <Header/>

            {/* CONTENT */}
            <Box sx={{
                height: 'inherit',
                display:'flex', 
                width:'100%',
                justifyContent: {xs:'center', sm: 'space-between'},
                alignItems:'center',
                background:{xs:'no-repeat center/cover url("img/smmain.jpg")', sm:'none'},
            }}>
                {/* INFO */} 
                <Box
                    sx={{
                        position:'relative',
                        color:'common.white',
                        maxWidth:'auto'
                    }}
                >
                    <Box 
                        sx={{
                            position:{xs:'unset', sm:'absolute'},
                            display:'flex',
                            flexDirection:{xs:'column', sm:'row'},
                            alignItems: 'center',
                            p:4,
                            zIndex:'100',
                            left:200,
                            top:-200,
                             backdropFilter:{xs: 'blur(8px)', sm:'blur(3px)'},
                            backgroundColor:{xs:'rgba(0, 0, 0, 0.15)', sm:'rgba(0, 0, 0, 0.15)', md:'rgba(0, 0, 0, 0.15)'},
                        }}
                    >
                        
                        {/* SOCIAL MEDIA  */}
                        <Box sx={{
                            display:'flex',
                            flexDirection:{xs:'row', sm: 'column'},
                            alignItems: 'center',
                            mb:{xs:4,  sm:0},
                            mr:{xs:0, sm: 4},
                        }}>
                            {
                                (!downsmall)&&
                                <Box mx={'auto'} mb={3} sx={{height:38, width:'1px', backgroundColor:'primary.main'}}></Box>
                            }
                            <IconButton aria-label="facebook" sx={{color:{xs:"primary.light", sm:"primary.main"}}} >
                                <FacebookIcon />
                            </IconButton>
                            <IconButton aria-label="facebook" sx={{color:{xs:"primary.light", sm:"primary.main"}}}>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton aria-label="facebook" sx={{color:{xs:"primary.light", sm:"primary.main"}}}>
                                <YouTubeIcon />
                            </IconButton>
                            <IconButton aria-label="facebook" sx={{color:{xs:"primary.light", sm:"primary.main"}}}>
                                <LinkedInIcon />
                            </IconButton>
                            {
                                (!downsmall)&&
                                <Box mx={'auto'} mt={3} sx={{height:38, width:'1px', backgroundColor:'primary.main'}}></Box>
                            }
                        </Box>
                        
                        {/* TEXT */}
                        <Box 
                            sx={{
                                display:'flex',
                                flexDirection:'column',
                                textAlign:{xs:'center', sm:'left'},
                                
                                alignItems:{xs:'center', sm: 'start'}
                            }}
                        >
                            <Typography variant={large ? "h1" : small ? "h2" : "h4"} sx={{fontWeight:{xs:700, sm:'inherit'}}}>Enjoy your life with our comfortable cars.</Typography>
                            {
                                (!downsmall)&&
                                <Box sx={{
                                    fontSize:{xs:14, md: 16, lg: 24}, 
                                    mt: 2
                                }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Box>
                            }
                            <Button variant="contained" sx={{
                                maxWidth: 256,
                                minWidth: 140,
                                width: {xs: 0.5, md: 0.5, lg: 1},
                                fontSize:{xs: 14, md: 20, lg: 20},
                                textTransform:'capitalize',
                                whiteSpace: 'nowrap',
                                mt: 4,
                            }}>
                                Explore Now
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* IMG */}
                <Box
                    sx={{                        
                        mt:'96px',
                        maxWidth: {xs:'100%', sm: '70%'},
                        width: {xs:'auto', sm:'80%', md:'70%'},
                        maxHeight: '80%',
                        overflowY: {xs:'unset',md:'hidden'},
                        overflowX: {xs:'unset',md:'visible'},                            
                    }}>
                        {
                            (ismedium || issmall )&&
                            <img src="img/mdmain.jpg" alt="main img" style={{width:'100%'}} />
                        }
                        {
                            (large)&&
                            <img src="img/main.jpg" alt="main img" style={{width:'100%' }} />
                        }
                </Box>
            </Box>
        </Box>
    );
}