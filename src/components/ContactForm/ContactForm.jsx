import { useTheme } from "@emotion/react";
import { Box, Button, Container, Paper, TextField, useMediaQuery } from "@mui/material";

export default function ContactForm(){
    const theme = useTheme();
    const large = useMediaQuery(theme.breakpoints.up("lg"));
    const medium = useMediaQuery(theme.breakpoints.up("md"));
    const small = useMediaQuery(theme.breakpoints.up("sm"));
    const xsmall = useMediaQuery(theme.breakpoints.up("xs"));

    return (
        <Box>
            <Container maxWidth='lg'>
                <Box
                    mx={'auto'}
                    sx={{
                        display:'flex',
                        alignItems: 'center',
                        justifyContent:'center',
                        
                    }}
                >
                    <Paper sx={{
                        width:'auto',
                        display:'flex',
                        alignItems: 'center',
                        justifyContent:'center',
                        columnGap:4,
                        p:4
                    }}>
                        <form autoComplete="off" >
                            <Box
                                sx={{
                                    
                                    display:'flex',
                                    flexDirection:'column',
                                    gap:2
                                }}
                            >
                                <TextField label="Your Name" variant="outlined" 
                                    sx={{
                                        width:'100%',
                                        minWidth:{md:300},
                                        maxWidth:{md:300}
                                    }} 
                                />
                                <TextField label="Your Email" variant="outlined" />
                                <TextField label="Your Message" multiline maxRows={4} />

                                <Button variant="contained" size="medium"
                                    sx={{
                                        textTransform:'capitalize',
                                        whiteSpace: 'nowrap',
                                        width:{xs:'100%', sm:'60%'}
                                    }}
                                >
                                    send a message
                                </Button>
                            </Box>
                        </form>

                            {
                                (small)&&
                                <Box maxWidth={200}>
                                    <img src="img/contact.jpg" alt="main img" style={{width:'100%'}} />
                                </Box>
                            }
                    </Paper>
                </Box>
                
            </Container>
        </Box>
    );
}