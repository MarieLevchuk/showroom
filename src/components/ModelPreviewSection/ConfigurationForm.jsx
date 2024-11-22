import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, MenuItem, Paper, Radio, RadioGroup, Select, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useState } from "react";

export default function ConfigurationForm(){
    const [bodyType, setBodyType] = useState('');
    const handleChange = (e) => {
        console.log('changed');
        
    }

    return(
        <Box>
            {/* <Paper > */}
                <Box sx={{display:'flex', flexDirection:'column', gap:4, fontSize:14, px:{xs:1, sm:2, md:4}}}>                
                    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'start', gap:4}}>
                        <FormControl sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, alignItems:{xs:'start', sm:'center'}, gap:2}}>
                            <FormLabel>Color</FormLabel>
                            <RadioGroup
                              aria-labelledby=""
                              defaultValue="1"
                              name="color"
                              sx={{flexDirection:'row'}}
                            >
                                <FormControlLabel value="1" control={<Radio />} label={
                                        <Box sx={{width:'30px', height:'30px', backgroundColor:"#0f1935", borderRadius:'50%'}}/>
                                    } 
                                />
                                <FormControlLabel value="2" control={<Radio />} label={
                                        <Box sx={{width:'30px', height:'30px', backgroundColor:"#ddd1d1", borderRadius:'50%'}}/>
                                    } 
                                />
                                <FormControlLabel value="3" control={<Radio />} label={
                                        <Box sx={{width:'30px', height:'30px', backgroundColor:"#10401e", borderRadius:'50%'}}/>
                                    } 
                                />
                                <FormControlLabel value="4" control={<Radio />} 
                                    label={
                                        <Box sx={{width:'30px', height:'30px', backgroundColor:"#42235a", borderRadius:'50%'}}/>
                                    }
                               />
                            </RadioGroup>
                        </FormControl>

                        <FormControl sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, alignItems:{xs:'start', sm:'center'}, gap:2}}>
                            <FormLabel>Wheels</FormLabel>
                            <RadioGroup
                              aria-labelledby=""
                              defaultValue="1"
                              name="wheels"
                              sx={{flexDirection:'row'}}
                            >
                                <FormControlLabel value="1" control={<Radio />} label={
                                        <Box sx={{width:'30px', height:'30px', backgroundColor:"#0f1935", borderRadius:'50%'}}/>
                                    } 
                                />
                                <FormControlLabel value="2" control={<Radio />} label={
                                        <Box sx={{width:'30px', height:'30px', backgroundColor:"#ddd1d1", borderRadius:'50%'}}/>
                                    } 
                                />
                                <FormControlLabel value="3" control={<Radio />} label={
                                        <Box sx={{width:'30px', height:'30px', backgroundColor:"#10401e", borderRadius:'50%'}}/>
                                    } 
                                />
                            </RadioGroup>
                        </FormControl>

                        <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, justifyContent:'start', alignItems:'start'}}>
                            <FormControl mr={4} >
                                <FormLabel>Interior</FormLabel>
                                <RadioGroup
                                  aria-labelledby=""
                                  defaultValue="1"
                                  name="interior"
                                >
                                    <FormControlLabel value="1" control={<Radio />} label="light" />
                                    <FormControlLabel value="2" control={<Radio />} label="dark" />
                                </RadioGroup>

                            </FormControl>
                            <Box sx={{maxWidth:{xs:'150px', sm:'200px', md:'300px'}}}>
                                <img src='img/interior1.jpg' alt='dark interior' style={{width:'100%'}} />
                            </Box>
                        </Box>
                    </Box>


                    <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, flexWrap:'wrap', justifyContent:'start', alignItems:'start', gap:{xs:1, sm:3, md:5}}}>
                        <FormControl>
                            <FormLabel>Passenger capacity</FormLabel>
                            <RadioGroup
                              aria-labelledby=""
                              defaultValue="2"
                              name="passengers"
                            >
                              <FormControlLabel value="2" control={<Radio />} label="2" />
                              <FormControlLabel value="5" control={<Radio />} label="5" />
                            </RadioGroup>
                        </FormControl>

                        <FormControl>
                            <FormLabel>Transmission</FormLabel>
                            <RadioGroup
                              aria-labelledby=""
                              defaultValue="1"
                              name="transmission"
                            >
                              <FormControlLabel value="1" control={<Radio />} label="Automatic" />
                              <FormControlLabel value="2" control={<Radio />} label="Manual" />
                            </RadioGroup>
                        </FormControl>

                        <FormControl>
                            <FormLabel>Fuel</FormLabel>
                            <RadioGroup
                              aria-labelledby=""
                              defaultValue="1"
                              name="fuel"
                            >
                              <FormControlLabel value="1" control={<Radio />} label="Electricity" />
                              <FormControlLabel value="2" control={<Radio />} label="Gasoline" />
                            </RadioGroup>
                        </FormControl>
                    
                        <Box>
                            {/* <Typography mb={1}>Car body</Typography> */}
                            <FormControl fullWidth >
                                <FormLabel>Car body</FormLabel>
                                {/* <InputLabel id="demo-simple-select-label1">Car body</InputLabel> */}
                                <Select
                                  labelId="demo-simple-select-label1"
                                  id="demo-simple-select1"
                                  value={bodyType}
                                //   label="Body type"
                                  onChange={handleChange}
                                  sx={{minWidth:{xs:100, sm:200}, mt:1}}
                                >
                                  <MenuItem value=""> <em>None</em> </MenuItem>
                                  <MenuItem value={10}>Sedan</MenuItem>
                                  <MenuItem value={20}>Sport</MenuItem>
                                  <MenuItem value={30}>Cabriolet</MenuItem>
                                  <MenuItem value={40}>SUV</MenuItem>
                                  <MenuItem value={50}>Coupe</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>

                    <Button variant="contained" sx={{width:'auto', maxWidth:'200px'}}>Save your build</Button>
                </Box>
            {/* </Paper> */}
        </Box>
    );
}