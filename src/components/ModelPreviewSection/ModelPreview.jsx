import { Accordion, AccordionDetails, AccordionSummary, Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import ConfigurationForm from '../ConfigurationForm/ConfigurationForm.jsx';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import buildEvents from '../../events/buildEvents.js';
import { useEffect, useState } from "react";

export default function ModelPreview({model, info}){

    const [imgColor, setimgColor] = useState('');

    useEffect(()=>{
        buildEvents.addListener('changeColor', changeColor);
        return () => {
            buildEvents.removeListener('changeColor', changeColor);
        }
    }, []);

    function changeColor(color){
        setimgColor(color);
    }

    return(
        <Box
            sx={{
                display:'flex',
                flexDirection:{xs:'column', md:'row'},
                gap:2,
            }}
        >
            {/* img */}
            <Box
                sx={{
                // display:'flex',
                // flexDirection:{xs:'column', md:'row'}
                }}
            >
                <img src={`/img/${imgColor+model.img}`} alt={model.img} style={{width:'100%'}} />
                {
                    (model.isConfigurable)&&
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                        >
                            <Typography ml='auto' mr={2} sx={{textTransform:'uppercase'}}>Build your own</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ConfigurationForm model={model}/>
                        </AccordionDetails>
                    </Accordion>
                    
                }
            </Box>

            {/* info */}
            <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                }}
            >
                <Typography variant="h3">Specifications</Typography>
                <TableContainer>
                    <Table  aria-label="model info">
                      <TableBody sx={{fontSize:{xs:12, sm:14, md:16, lg:18}}} >
                          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell variant="th" scope="row">Year</TableCell>
                            <TableCell align="right">{model.year}</TableCell>
                          </TableRow>
                          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell variant="th" component="th" scope="row">Car body</TableCell>
                            <TableCell align="right">{info.body}</TableCell>
                          </TableRow>
                          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell variant="th" component="th" scope="row">Passenger capacity</TableCell>
                            <TableCell align="right">{info.persons}</TableCell>
                          </TableRow>
                          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell variant="th" component="th" scope="row">Transmission</TableCell>
                            <TableCell align="right">{info.transmission}</TableCell>
                          </TableRow>
                          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell variant="th" component="th" scope="row">Engine</TableCell>
                            <TableCell align="right">{info.engine}</TableCell>
                          </TableRow>
                          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell variant="th" component="th" scope="row">fuel</TableCell>
                            <TableCell align="right">{info.fuel}</TableCell>
                          </TableRow>
                      </TableBody>
                    </Table>
                </TableContainer>
                <Box mt='auto' mb={0}>
                    <Typography sx={{fontSize:{xs:12, sm:16}}}>Starting at</Typography>
                    <Typography variant="h3" color="primary">${info.price}</Typography>
                </Box>
            </Box>
        </Box>
    );
}