import { Box, Container, Paper } from "@mui/material";
import SectionHeader from "../MainSection/SectionHeader";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'model', headerName: 'Model', width: 130 },
    { field: 'color', headerName: 'Color', width: 130 },
    { field: 'wheels', headerName: 'Wheels', width: 130 },
    { field: 'interior', headerName: 'Interior', width: 130 },
    { field: 'persons', headerName: 'Persons', width: 130 },
    { field: 'fuel', headerName: 'Fuel', width: 130 },
    { field: 'body', headerName: 'Car body', width: 130 },
    { field: 'transmission', headerName: 'Transmission', width: 130 },
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