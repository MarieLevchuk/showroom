import { AppBar, Box, Button, Container, IconButton, Link, Menu, Toolbar, Typography } from "@mui/material";

const navItems = ['Home', 'Cars', 'Test drive', 'Contacts'];

export default function Header() {
    return(
        <AppBar position="static" component="nav" sx={{ fontSize: 16 }}>
            <Container maxWidth="lg">
                <Toolbar sx={{width:'100%', height: '103px'}}>
                    <Box sx={{
                        width:'100%',
                        display: 'flex',
                        alignContent: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Box sx={{ textTransform: "uppercase", color: 'primary.main' }}>
                            <h1>showroom</h1>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 4
                        }}>
                            {navItems.map((item, index) => (
                                <Link href="#" key={index} underline="hover" sx={{ color: 'common.black' }} >
                                    {/* <Box> */}
                                        {item}
                                    {/* </Box> */}
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}