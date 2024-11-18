import { Box, Container, Typography } from "@mui/material";

export default function Info(){
    return(
        <Box 
            sx={{
                bgcolor:'secondary.main'
            }}
        >
            <Container maxWidth='lg'>
                <Box
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                        flexWrap:'wrap',
                        py:2,
                        my:3
                    }}
                >
                    <Box
                        sx={{
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',
                            alignItems:'center',
                            m:4
                        }}
                    >
                        <Typography variant="h2" sx={{fontWeight:600}}>
                            1926
                        </Typography>
                        <Typography variant="p" sx={{fontWeight:100}}>
                            since
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',
                            alignItems:'center',
                            m:4
                        }}
                    >
                        <Typography variant="h2" sx={{fontWeight:600}}>
                            133+
                        </Typography>
                        <Typography variant="p" sx={{fontWeight:100}}>
                            models
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',
                            alignItems:'center',
                            m:4
                        }}
                    >
                        <Typography variant="h2" sx={{fontWeight:600}}>
                            100%
                        </Typography>
                        <Typography variant="p" sx={{fontWeight:100}}>
                            safety
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}