import { Box, IconButton, useMediaQuery } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useTheme } from "@emotion/react";

export default function Social(){
    const theme = useTheme();
    const large = useMediaQuery(theme.breakpoints.up("lg"));
    const medium = useMediaQuery(theme.breakpoints.up("md"));
    const small = useMediaQuery(theme.breakpoints.up("sm"));
    const xsmall = useMediaQuery(theme.breakpoints.up("xs"));
    
    const downsmall = useMediaQuery(theme.breakpoints.down("sm"));

    return(
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
    );
}