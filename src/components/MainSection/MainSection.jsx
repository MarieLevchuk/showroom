import { Box, Container, Divider, Link, Typography } from "@mui/material";
import SectionHeader from "./SectionHeader";
import CarCard from "./CarCard";
import NorthEastIcon from '@mui/icons-material/NorthEast';
import ContactForm from "../ContactForm/ContactForm";
import Info from "../Info/Info";
import TestDriveForm from "../TestDriveForm/TestDriveForm";

const featuredModels = [
    { id: 1, name: 'Model A', img: '2.jpg', year:2019,  persons:5, body:'sedan', fuel: 'Electric' },
    { id: 2, name: 'Model B', img: '3.webp', year:2024, persons:2, body:'sports',  fuel: 'Gasoline' },
    { id: 3, name: 'Model C', img: '4.webp', year:1980, persons:2, body:'sedan',  fuel: 'Gasoline' }
];

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
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent:'center',
                            flexWrap:'wrap',
                            gap: {xs:1, sm: 4}
                        }}
                    >
                        {
                            featuredModels.map(model => <CarCard key={model.id} model={model}/>)
                        }
                    </Box>

                    <Box mt={4} sx={{alignSelf:'center'}}>
                    <Link href="#" underline="none"> discover all models <NorthEastIcon/></Link>
                    </Box>
                </Box>
            </Container>

                    <Info/>

                    {/* TITLE TEST DRIVE */}
                    <SectionHeader title="Test drive"/>
                    <TestDriveForm/>

                    {/* TITLE CONTACT US */}
                    <SectionHeader title="Contact us"/>
                    <ContactForm/>
            
        </Box>
    );
}