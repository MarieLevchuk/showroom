import { Box, Container, Paper } from "@mui/material";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID'},
    { field: 'model', headerName: 'Model'},
    { field: 'color', headerName: 'Color'},
    { field: 'wheels', headerName: 'Wheels'},
    { field: 'interior', headerName: 'Interior'},
    { field: 'persons', headerName: 'Persons'},
    { field: 'fuel', headerName: 'Fuel'},
    { field: 'body', headerName: 'Car body'},
    { field: 'transmission', headerName: 'Transmission'},
];
  
const rows = [
    { id: 1, model: 'Model A', color: '#ddd1d1', wheels: 1, interior: 2, persons: 2, fuel: 1, body: 2, transmission: 'manual' },
    { id: 2, model: 'Model C', color: '#ddd1d1', wheels: 3, interior: 1, persons: 5, fuel: 1, body: 4, transmission: 'manual' },
    { id: 3, model: 'Model B', color: '{<h1>1</h1>}', wheels: 1, interior: 1, persons: 5, fuel: 1, body: 2, transmission: 'Automatic' },
    { id: 4, model: 'Model C', color: '#ddd1d1', wheels: 1, interior: 1, persons: 5, fuel: 1, body: 2, transmission: 'Automatic' },
    { id: 5, model: 'Model B', color: '#ddd1d1', wheels: 2, interior: 2, persons: 2, fuel: 1, body: 1, transmission: 'manual' },
    { id: 6, model: 'Model B', color: '#ddd1d1', wheels: 2, interior: 2, persons: 2, fuel: 1, body: 1, transmission: 'manual' },
];
  
const paginationModel = { page: 0, pageSize: 5 };
  

export default function BuildsSection(){
    return(
        <Box py='100px'>
            <Container maxWidth='lg'>
                <SectionHeader title="Your builds" />
                <Paper sx={{ height: '70vh', width: '100%' }}>
                    <DataGrid
                      rows={rows}
                      columns={columns}
                      initialState={{ pagination: { paginationModel } }}
                      pageSizeOptions={[5, 10]}
                      checkboxSelection
                      sx={{ border: 0, fontSize:16 }}
                    />
                </Paper>
            </Container>
        </Box >
    );
}