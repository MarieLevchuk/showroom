import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import React from "react";

function CarCard({model}){
    // console.log('rendered car ' + model.id);
    
    return(
        <Card 
            sx={{ 
                minWidth: '200px',
                maxWidth:'33%',
                width:'30%'
            }}
        >
            <CardMedia
              sx={{ maxHeight: 500, height:200 }}
              image={"img/"+model.img}
              title={model.name}
            />
            <CardContent>
              <Typography gutterBottom  variant="h5" component="div">
                {model.name}
              </Typography>
              <Typography variant="p" component="div">
                {model.year}
              </Typography>
              <Box
                sx={{
                    display:'flex',
                    gap:1,
                    textTransform:'capitalize'
                }}
              >
                <Box sx={{display:'flex', flexDirection:'row', flexWrap:'nowrap', alignItems:'center' }}>
                    <PersonIcon fontSize="small" sx={{color:'grey.100'}}/> 
                    {model.specifications[0].persons}
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', flexWrap:'nowrap', alignItems:'center' }}>
                    <LocalGasStationIcon fontSize="small" sx={{color:'grey.100'}}/> 
                    {model.specifications[0].fuel}
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', flexWrap:'nowrap', alignItems:'center' }}>
                    <DirectionsCarIcon fontSize="small" sx={{color:'grey.100'}}/> 
                    {model.specifications[0].body}
                </Box>
              </Box>
            </CardContent>
            <CardActions>
              <Link to={`/cars/${model.id}`}>
                <Button size="small">More info</Button>
              </Link>
            </CardActions>
        </Card>
    );
}

export default React.memo(CarCard);