import { AppBar, Box, Button, Container, CssBaseline, Divider, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Menu, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['Home', 'Cars', 'Test drive', 'Contacts'];
const drawerWidth = 240;

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{fontWeight:600, textTransform: "uppercase", color: 'primary.main', my: 2}}> showroom </Typography>                          
            <Divider />
            <List>
                {navItems.map((item) => (
                  <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    
    return(
        <Box>
            <AppBar  position="static" component="nav">
                <Toolbar disableGutters sx={{width:'100%', height: '103px'}}>
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ m: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Container maxWidth="lg">
                        <Box sx={{
                            width:'100%',
                            display: 'flex',
                            alignContent: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Box sx={{ textTransform: "uppercase", color: 'primary.main' }}>
                                <Typography variant="h3" sx={{fontWeight:800}}> showroom </Typography>
                            </Box>
                            <Box sx={{
                                display: {xs: 'none', sm: 'flex'},
                                flexDirection: 'row',
                                gap: 4
                            }}>
                                {navItems.map((item, index) => (
                                    <Link href="#" key={index} underline="hover" sx={{ color: 'common.black' }} >
                                            {item}
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>

            <nav>
                <Drawer
                  container={container}
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                  }}
                >
                  {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  export default Header;