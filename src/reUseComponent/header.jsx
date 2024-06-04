import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import logoImage from "../images/Logo--3-Const-hi-res 2.png"
const drawerWidth = 240;
import { useState } from 'react';
const navItems = ['Home', ' Goals', 'Spas', 'Blog'];
function DrawerAppBar(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', fontFamily: "Raleway" }}>

            <div className=' leading-4 block xl:w-36 sm:w-36 sm:text-center
             xl:text-center cursor-pointer'>

                <Typography className=' flex justify-center'
                >
                    <div>
                        {/* <img className=' h-12 p-2' src={logoImage} alt='logo' /> */}
                        <p>Glow Scout</p>
                    </div>
                </Typography>
            </div>

            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding
                    >
                        <ListItemButton sx={{
                            textAlign: 'center',
                            '&:hover': {
                                backgroundColor: '#f15a29', // Change this to the desired hover color
                                color: 'white', // Change this to the desired text color on hover
                            },
                        }}
                        >
                            <ListItemText
                                primaryTypographyProps={{ fontFamily: "Raleway" }}
                                primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const [activeLink, setActiveLink] = useState('Home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
            <CssBaseline />
            <AppBar component="nav" style={
                {
                    backgroundColor: "#f8f8f8",
                    width: "100%"
                }
            }>
                <Toolbar>
                    <IconButton
                        color="#000"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1, textAlign: {
                                xs: 'right',
                                sm: 'left',
                            }, display: { sm: 'block' }
                        }}
                    >

                        <div className=' leading-4 block  sm:text-center
             xl:text-center cursor-pointer'>

                            <Typography className=' float-right md:float-left  w-full' sx={{
                                marginRight: {
                                    xs: "4px"
                                },
                                marginLeft: {
                                    sm: "5px"
                                }
                            }}>
                                <div className=' flex justify-end  sm:justify-around w-full'>
                                    {/* <img className=' h-8' src={logoImage} alt='logo' /> */}
                                    <p>Glow Scout</p>
                                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                        <div className='flex items-center justify-center h-full'>

                                            
                                            <p
                                                className={`cursor-pointer font-[Raleway] ${activeLink === 'Home' ? 'text-red-500' : 'text-black'}`}
                                                onClick={(event) => handleLinkClick('Home')}
                                            >
                                                Home
                                            </p>
                                            <p
                                                className={`ml-4 cursor-pointer font-[Raleway] ${activeLink === 'Services' ? 'text-red-500' : 'text-black'}`}
                                                onClick={(event) => handleLinkClick('Services')}
                                            >
                                                Services
                                            </p>
                                            <p

                                                className={`ml-4 cursor-pointer font-[Raleway] ${activeLink === 'About Us' ? 'text-red-500' : 'text-black'}`}
                                                onClick={(event) => handleLinkClick('About Us')}
                                            >
                                                About Us
                                            </p>
                                            <p
                                                className={`ml-4 cursor-pointer font-[Raleway] ${activeLink === 'Pricing' ? 'text-red-500' : 'text-black'}`}
                                                onClick={(event) => handleLinkClick('Pricing')}
                                            >
                                                Pricing
                                            </p>
                                            <p

                                                className={`ml-4 cursor-pointer font-[Raleway] ${activeLink === 'Contact Us' ? 'text-red-500' : 'text-black'}`}
                                                onClick={(event) => handleLinkClick('Contact Us')}
                                            >
                                                Contact Us
                                            </p>
                                        </div>
                                    </Box>
                                    <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                                        <Button variant="contained" sx={{
                                            backgroundColor: "#f15a29",
                                            color: 'white',
                                            fontFamily: "Raleway",
                                            borderRadius: "20px",
                                            width: "115px",
                                            '&:hover': {
                                                backgroundColor: "#d94410", // Change this to the desired hover color
                                            },
                                        }}>
                                            Careers
                                        </Button>
                                    </Stack>
                                </div>
                            </Typography>

                        </div>
                    </Typography>

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

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;