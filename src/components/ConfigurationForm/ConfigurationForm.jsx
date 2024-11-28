import { Box, Button, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
import {useState } from "react";
import buildEvents from '../../events/buildEvents.js';
import { useDispatch, useSelector } from "react-redux";
import { addBuild } from "../../redux/buildsSlice.js";
import Snackbar from '@mui/material/Snackbar';

const colors = [{name:'white', code:'#eaebec'}, {name:'black', code:'#0b0b0b'}, {name:'red', code:'#8b242c'}, {name:'blue', code:'#191c49'}];
const interiorTypes = ['light', 'dark'];
const transmissionTypes = ['automatic', 'manual'];
const fuelTypes = ['electric', 'petrol', 'disel'];
const passengerCapacity = [2, 5];


export default function ConfigurationForm({model}){
    const buildsData = useSelector(state => state.builds);
    const dispatch = useDispatch();
    
    const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);

    const [color, setColor] = useState(colors[0].name);
    const [interior, setInterior] = useState(interiorTypes[0]);
    const [transmission, setTransmission] = useState(transmissionTypes[0]);
    const [fuel, setFuel] = useState(fuelTypes[0]);
    const [persons, setPersons] = useState(passengerCapacity[0]);

    const handleColorChange = (e) => {
        setColor(e.target.value);
        buildEvents.emit('changeColor', e.target.value)
    }

    const handleCloseSnackbar = () =>{
        setSnackbarIsOpen(false);
    }

    function handleSave (){
        let build = {
            id: getMaxBuildId() + 1,
            carModel: model.name,
            carModelId: model.id,
            color: color,
            interior: interior,
            fuel: fuel,
            transmission: transmission,
            persons: persons
        };
        dispatch(addBuild(build));
        setSnackbarIsOpen(true);
    }

    function getMaxBuildId(){
        if(buildsData.builds.length == 0){
            return 0;
        }

        let max = buildsData.builds.reduce((prev, current) => {
            return (prev.id > current.id) ? prev : current;
        });

        return max.id;
    }

    return(
        <Box>
            {/* <Paper > */}
                <Box sx={{display:'flex', flexDirection:'column', gap:4, fontSize:14, px:{xs:1, sm:2, md:4}}}>                
                    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'start', gap:4}}>
                        <FormControl sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, alignItems:{xs:'start', sm:'center'}, gap:2}}>
                            <FormLabel>Color</FormLabel>
                            <RadioGroup
                                value={color}
                                name="color"
                                sx={{flexDirection:'row'}}
                                onChange={handleColorChange}
                            >
                                {
                                    colors.map((color, index) => {
                                        return (<FormControlLabel key={index} value={color.name} control={<Radio />} label={
                                            <Box sx={{width:'30px', height:'30px', backgroundColor:color.code, borderRadius:'50%'}}/>
                                        }/>);
                                    })
                                }
                            </RadioGroup>
                        </FormControl>

                        <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, justifyContent:'start', alignItems:'start'}}>
                            <FormControl mr={4} >
                                <FormLabel>Interior</FormLabel>
                                <RadioGroup
                                    name="interior"
                                    value={interior}
                                    onChange={e => setInterior(e.target.value)}
                                >
                                    {
                                        interiorTypes.map((type, index) => <FormControlLabel key={index} value={type} control={<Radio />} label={type} />)
                                    }
                                </RadioGroup>

                            </FormControl>
                            <Box sx={{maxWidth:{xs:'150px', sm:'200px', md:'300px'}}}>
                                <img src={`/img/${interior}interior.jpg`} alt='dark interior' style={{width:'100%'}} />
                            </Box>
                        </Box>
                    </Box>


                    <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, flexWrap:'wrap', justifyContent:'start', alignItems:'start', gap:{xs:1, sm:3, md:5}}}>
                        
                        <FormControl>
                            <FormLabel>Fuel</FormLabel>
                            <RadioGroup
                              name="fuel"
                              value={fuel}
                              onChange={e => setFuel(e.target.value)}
                            >
                                {
                                    fuelTypes.map((type, index) => <FormControlLabel key={index} value={type} control={<Radio />} label={type} />)
                                }
                            </RadioGroup>
                        </FormControl>

                        <FormControl>
                            <FormLabel>Transmission</FormLabel>
                            <RadioGroup
                              name="transmission"
                              value={transmission}
                              onChange={e => setTransmission(e.target.value)}
                            >
                                {
                                    transmissionTypes.map((type, index) => <FormControlLabel key={index} value={type} control={<Radio />} label={type} />)
                                }
                            </RadioGroup>
                        </FormControl>
                    
                        <Box>
                            <FormControl >
                                <FormLabel>Passenger capacity</FormLabel>
                                <Select
                                    value={persons}
                                    sx={{minWidth:{xs:100, sm:200}, mt:1}}
                                    onChange={e => setPersons(e.target.value)}
                                >
                                  {
                                    passengerCapacity.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)
                                  }
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>

                    <Button variant="contained" sx={{width:'auto', maxWidth:'200px'}} onClick={handleSave}>Save your build</Button>
                </Box>

                <Snackbar
                  open={snackbarIsOpen}
                  autoHideDuration={6000}
                  onClose={handleCloseSnackbar}
                  message="Build saved"
                //   action={action}
                />
            {/* </Paper> */}
        </Box>
    );
}