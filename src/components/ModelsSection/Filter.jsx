import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";
import { useState } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Filter(){
    const [bodyType, setBodyType] = useState('');
    const handleChange = (e) => {
        console.log('changed');
        
    }

    return (
        <Box mx='auto' sx={{ width:{xs:'auto', md:'90', lg:'70%'}}}>
        <Paper >
            <Box my={4} py={4} sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, justifyContent:'space-around', alignItems:'center'}}>
                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <Typography>Fuel</Typography>
                    <FormControlLabel
                      control={
                        <Checkbox checked={true} onChange={handleChange} name="electricity" />
                      }
                      label="Electricity"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={true} onChange={handleChange} name="gasoline" />
                      }
                      label="Gasoline"
                    />
                </Box>
                <Box>
                    <Typography mb={1}>Car body</Typography>
                    <FormControl fullWidth>
                        {/* <InputLabel id="demo-simple-select-label1">Car body</InputLabel> */}
                        <Select
                          labelId="demo-simple-select-label1"
                          id="demo-simple-select1"
                          value={bodyType}
                        //   label="Body type"
                          onChange={handleChange}
                          sx={{minWidth:200}}
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
                <Box>
                    <Typography>Production year</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker label={''} views={['year']} />
                      </DemoContainer>
                    </LocalizationProvider>
                </Box>
            </Box>
        </Paper>
        </Box>
    );
}