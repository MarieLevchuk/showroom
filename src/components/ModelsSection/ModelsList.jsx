import { Box } from "@mui/material";
import CarCard from "../MainSection/CarCard";

const allModels = [
    { id: 1, name: 'Model A', img: '2.jpg', year:2019,  persons:5, body:'sedan', fuel: 'Electric' },
    { id: 2, name: 'Model B', img: '3.webp', year:2024, persons:2, body:'sports',  fuel: 'Gasoline' },
    { id: 3, name: 'Model C', img: '4.webp', year:1980, persons:2, body:'sedan',  fuel: 'Gasoline' },
    { id: 4, name: 'Model A', img: '2.jpg', year:2019,  persons:5, body:'sedan', fuel: 'Electric' },
    { id: 5, name: 'Model B', img: '3.webp', year:2024, persons:2, body:'sports',  fuel: 'Gasoline' },
    { id: 6, name: 'Model C', img: '4.webp', year:1980, persons:2, body:'sedan',  fuel: 'Gasoline' },
    { id: 7, name: 'Model A', img: '2.jpg', year:2019,  persons:5, body:'sedan', fuel: 'Electric' },
    { id: 8, name: 'Model B', img: '3.webp', year:2024, persons:2, body:'sports',  fuel: 'Gasoline' },
    { id: 9, name: 'Model C', img: '4.webp', year:1980, persons:2, body:'sedan',  fuel: 'Gasoline' },
    { id: 10, name: 'Model A', img: '2.jpg', year:2019,  persons:5, body:'sedan', fuel: 'Electric' },
    { id: 11, name: 'Model B', img: '3.webp', year:2024, persons:2, body:'sports',  fuel: 'Gasoline' },
    { id: 12, name: 'Model C', img: '4.webp', year:1980, persons:2, body:'sedan',  fuel: 'Gasoline' },
    { id: 13, name: 'Model A', img: '2.jpg', year:2019,  persons:5, body:'sedan', fuel: 'Electric' },
    { id: 14, name: 'Model B', img: '3.webp', year:2024, persons:2, body:'sports',  fuel: 'Gasoline' },
    { id: 15, name: 'Model C', img: '4.webp', year:1980, persons:2, body:'sedan',  fuel: 'Gasoline' },
    { id: 16, name: 'Model A', img: '2.jpg', year:2019,  persons:5, body:'sedan', fuel: 'Electric' },
    { id: 17, name: 'Model B', img: '3.webp', year:2024, persons:2, body:'sports',  fuel: 'Gasoline' },
    { id: 18, name: 'Model C', img: '4.webp', year:1980, persons:2, body:'sedan',  fuel: 'Gasoline' },
    { id: 19, name: 'Model A', img: '2.jpg', year:2019,  persons:5, body:'sedan', fuel: 'Electric' },
    { id: 20, name: 'Model B', img: '3.webp', year:2024, persons:2, body:'sports',  fuel: 'Gasoline' },
    { id: 21, name: 'Model C', img: '4.webp', year:1980, persons:2, body:'sedan',  fuel: 'Gasoline' },
    { id: 22, name: 'Model A', img: '2.jpg', year:2019,  persons:5, body:'sedan', fuel: 'Electric' },
    { id: 23, name: 'Model B', img: '3.webp', year:2024, persons:2, body:'sports',  fuel: 'Gasoline' },
    { id: 24, name: 'Model C', img: '4.webp', year:1980, persons:2, body:'sedan',  fuel: 'Gasoline' },
];

export default function ModelsList(){
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent:'center',
                flexWrap:'wrap',
                gap: {xs:1, sm: 4}
            }}
        >
            {
                allModels.map(model => <CarCard key={model.id} model={model}/>)
            }
        </Box>
    );
}