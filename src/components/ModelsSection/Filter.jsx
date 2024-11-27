import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Typography } from "@mui/material";
import { useState } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const transmissionTypes = ['all', 'automatic', 'manual'];
const fuelTypes = ['all', 'electric', 'petrol', 'disel'];
const bodyTypes =[ 'coupe', 'cabriolet', 'sports', 'sedan', 'van', 'crossover', 'SUV'];
const passengerCapacity = [2, 5, 7, 8, 10];

export default function Filter(){
    const [persons, setPersons] = useState(passengerCapacity[0]);
    const [fuel, setFuel] = useState(fuelTypes[0]);
    const [transmission, setTransmission] = useState(transmissionTypes[0]);
    const [bodyType, setBodyType] = useState('');    

    const handleChange = () => {
      console.log('filter!');
        
    }

    return (
        <Box mx='auto' sx={{ width:{xs:'auto', md:'90', lg:'70%'}}}>
        <Paper >
            <Box my={4} py={4} sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, justifyContent:'space-around', alignItems:'start'}}>
                <Box>
                  <FormControl>
                    <FormLabel id="filter-fuel">Fuel</FormLabel>
                    <RadioGroup
                      aria-labelledby="filter-fuel"
                      value={fuel}
                      onChange={(e) => { setFuel(e.target.value); handleChange()}}
                      name="fuel"
                    >
                      {
                        fuelTypes.map((item, index) => <FormControlLabel key={index} value={item} control={<Radio />} label={item} />)
                      }
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel id="filter-transmission">Transmission</FormLabel>
                    <RadioGroup
                      aria-labelledby="filter-transmission"
                      value={transmission}
                      onChange={(e) => { setTransmission(e.target.value); handleChange()}}
                      name="transmission"
                    >
                      {
                        transmissionTypes.map((item, index) => <FormControlLabel key={index} value={item} control={<Radio />} label={item} />)
                      }
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl fullWidth >
                    <FormLabel id="filter-persons">Passenger capacity</FormLabel>
                    <Select
                      labelId="filter-persons"
                      value={persons}
                      onChange={(e) => { setPersons(e.target.value); handleChange()}}
                      sx={{minWidth:{xs:100, sm:200}, mt:1}}
                    >
                      <MenuItem value=""> <em>unset</em> </MenuItem>
                      {
                        passengerCapacity.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)
                      }
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl fullWidth >
                    <FormLabel id="filter-body">Car body</FormLabel>
                    <Select
                      labelId="filter-body"
                      value={bodyType}
                      onChange={(e) => { setBodyType(e.target.value); handleChange()}}
                      sx={{minWidth:{xs:100, sm:200}, mt:1}}
                    >
                      <MenuItem value=""> <em>none</em> </MenuItem>
                      {
                        bodyTypes.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)
                      }
                    </Select>
                  </FormControl>
                </Box>
            </Box>
        </Paper>
        </Box>
    );
}