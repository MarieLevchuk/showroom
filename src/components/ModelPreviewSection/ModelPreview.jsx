import { Accordion, AccordionDetails, AccordionSummary, Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import ConfigurationForm from "./ConfigurationForm";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function ModelPreview({model, info}){
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
                <img src={`img/${model.img}`} alt={model.img} style={{width:'100%'}} />
                {
                    (model.isConfigurable)&&
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                        >
                            <Typography ml='auto' mr={2} sx={{textTransform:'uppercase'}}>Build your own</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ConfigurationForm />
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
                            <TableCell align="right">{model.body}</TableCell>
                          </TableRow>
                          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell variant="th" component="th" scope="row">Passenger capacity</TableCell>
                            <TableCell align="right">{model.persons}</TableCell>
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
                            <TableCell align="right">{model.fuel}</TableCell>
                          </TableRow>
                      </TableBody>
                    </Table>
                </TableContainer>
                <Box mt='auto' mb={0}>
                    <Typography sx={{fontSize:{xs:12, sm:16}}}>Starting at</Typography>
                    <Typography variant="h3" color="primary">${model.price}</Typography>
                </Box>
            </Box>
        </Box>
    );
}