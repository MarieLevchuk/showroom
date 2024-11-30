import { Box, Container, Divider, Typography } from "@mui/material";
import SectionHeader from "../SectionHeader/SectionHeader";
import CarCard from "../CarCard/CarCard";
import NorthEastIcon from '@mui/icons-material/NorthEast';
import ContactForm from "../ContactForm/ContactForm";
import Info from "../Info/Info";
import TestDriveForm from "../TestDriveForm/TestDriveForm";
import FeaturedCars from "../FeaturedCars/FeaturedCars";
import { Link } from "react-router-dom";
import TestDriveFormWrapper from "../TestDriveForm/TestDriveFormWrapper";

export default function MainSection(){

    return(
        <Box 
            // sx={{height:'100vh'}}
        >
            <Container maxWidth="lg" >
                <Box 
                    sx={{
                        display:'flex',
                        flexDirection:'column'
                    }}
                >
                    {/* TITLE CARS */}
                    <SectionHeader title="Our featured models"/>

                    {/* CONTENT CARS */}
                    <FeaturedCars/>

                    <Box mt={4} sx={{alignSelf:'center'}}>

                    <Link to={`/cars`}>
                        <Typography underline="none" variant="h5" color='primary'> discover all models <NorthEastIcon/></Typography>
                    </Link>
                    
                    </Box>
                </Box>

                {/* TITLE TEST DRIVE */}
                <SectionHeader title="Test drive"/>
                <TestDriveFormWrapper/>
            </Container>

                    <Info/>

                    

                    {/* TITLE CONTACT US */}
                    <SectionHeader title="Contact us"/>
                    <ContactForm/>
            
        </Box>
    );
}