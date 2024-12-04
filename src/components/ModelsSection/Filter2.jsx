import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Typography } from "@mui/material";

const transmissionTypes = ['all', 'automatic', 'manual'];
const passengerCapacity = [2, 5, 7, 8, 10];

export default function Filter2({isConfigurable, transmission, persons, setFilters}){
    
    const handleChange = (name, value) => {
      setFilters( prev => ({...prev, [name]:value}))
    }

    return (
        <Box mx='auto' sx={{ width:{xs:'auto', md:'90', lg:'70%'}}}>
        <Paper >
            <Box my={4} py={4} sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, justifyContent:'space-around', alignItems:'start'}}>
                
                <Box>
                  <FormControl>
                    <FormLabel id="filter-transmission">Transmission</FormLabel>
                    <RadioGroup
                      aria-labelledby="filter-transmission"
                      value={transmission}
                      onChange={(e) => handleChange(e.target.name, e.target.value)}
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
                      name='persons'
                      onChange={(e) => handleChange(e.target.name, e.target.value)}
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
                  <Box mt={4}>
                      <FormControlLabel control={<Checkbox checked={isConfigurable}  name='isConfigurable' onChange={(e) => handleChange(e.target.name, e.target.checked)}/>} label="Configurable" />
                  </Box>
                </Box>
            </Box>
        </Paper>
        </Box>
    );
}