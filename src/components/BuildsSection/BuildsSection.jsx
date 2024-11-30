import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

import BuildsTableRow from "./BuildsTableRow.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BuildsSection(){
    const buildsData = useSelector(state => state.builds);
    const dispatch = useDispatch();

    return(
        <Box py='100px' sx={{ minHeight: '100vh'}}>
            <Container maxWidth='lg'>
                <SectionHeader title="Your builds" />
                <Paper sx={{ height: 'auto', width: '100%' }}>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead sx={{backgroundColor:'secondary.main', textDecoration:'uppercase'}}>
                          <TableRow>
                            <TableCell sx={{fontSize:14}}>Model</TableCell>
                            <TableCell sx={{fontSize:14}}>Color</TableCell>
                            <TableCell sx={{fontSize:14}}>Interior</TableCell>
                            <TableCell sx={{fontSize:14}}>Fuel</TableCell>
                            <TableCell sx={{fontSize:14}}>Transmission</TableCell>
                            <TableCell sx={{fontSize:14}}>Passenger capacity</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {
                            (buildsData.builds.length > 0) ? (
                              buildsData.builds.map((build, index) =>  < BuildsTableRow key={index} build={build} /> )
                            ) : (
                              <Box> no data </Box>
                            )
                          }
                        </TableBody>
                      </Table>
                    </TableContainer>
                </Paper>
            </Container>
        </Box >
    );
}