import { Box, Container, Divider, Link, Typography } from "@mui/material";
import SectionHeader from "../SectionHeader/SectionHeader";
import CarCard from "../CarCard/CarCard";
import NorthEastIcon from '@mui/icons-material/NorthEast';
import ContactForm from "../ContactForm/ContactForm";
import Info from "../Info/Info";
import TestDriveForm from "../TestDriveForm/TestDriveForm";
import FeaturedCars from "../FeaturedCars/FeaturedCars";

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
                    <Link href="#" underline="none"> discover all models <NorthEastIcon/></Link>
                    </Box>
                </Box>

                {/* TITLE TEST DRIVE */}
                <SectionHeader title="Test drive"/>
                <TestDriveForm/>
            </Container>

                    <Info/>

                    

                    {/* TITLE CONTACT US */}
                    <SectionHeader title="Contact us"/>
                    <ContactForm/>
            
        </Box>
    );
}