import { useTheme } from "@emotion/react";
import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, Snackbar, Step, StepLabel, Stepper, TextField, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ScheduleIcon from '@mui/icons-material/Schedule';
import NotesIcon from '@mui/icons-material/Notes';
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";

const ColorlibStepIconRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  zIndex: 1,
  color: theme.palette.common.white,
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        color: theme.palette.common.white, 
        backgroundColor: theme.palette.primary.main
      },
    },
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
        color: theme.palette.common.white, 
        backgroundColor: theme.palette.primary.main
      },
    },
  ],
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <DirectionsCarIcon />,
    2: <ScheduleIcon />,
    3: <NotesIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ['Select a car', 'Select date and time', 'Your contacts'];

export default function TestDriveForm({models}){
    const [carModel, setCarModel] = useState('');
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [img, setImg] = useState('')

    const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);
    const handleCloseSnackbar = () =>{
      setSnackbarIsOpen(false);
  }

    const handleCarModelSelect = (e) => {
      setCarModel(e.target.value)
      let selected = models.find(model => (model.id == e.target.value) ? model : '' );
      setImg(selected.img);
    }

    const theme = useTheme();
    const isxsmall = useMediaQuery(theme.breakpoints.only("xs"));

    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    const isStepOptional = (step) => {
        return step === -1;
    };

    const isStepSkipped = (step) => {
      return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        } 

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
          const newSkipped = new Set(prevSkipped.values());
          newSkipped.add(activeStep);
          return newSkipped;
        });
    };

    const handleReset = () => {
      setCarModel('')
      setDate(null)
      setTime(null)
      setName('')
      setEmail('')
      setPhone('')
      setActiveStep(0);
    };
    const handleBook = () => {
      let formdata = {
        model: carModel,
        date: date,
        time: time,
        name: name,
        email: email,
        phone: phone
      }

      // some logic to send formdata to a server
      // dispatch(saveFormData(formdata))

      setSnackbarIsOpen(true);
    };
      

    return (
        <Box>
            <Container maxWidth='lg'>
                <Box mx={'auto'} sx={{ width: '80%' }}>
                  <Box  sx={{display:{xs:'flex', sm:'block'}, width:{xs:'100%', sm:'auto'}, justifyContent:'center'}}>
                    <Stepper orientation={isxsmall?"vertical":"horizontal"} activeStep={activeStep}>
                      {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                          labelProps.optional = (
                            <Typography variant="caption" sx={{color:'common.black'}}>Optional</Typography>
                          );
                        }
                        if (isStepSkipped(index)) {
                          stepProps.completed = false;
                        }

                        return (
                          <Step key={label} {...stepProps} >
                            <StepLabel StepIconComponent={ColorlibStepIcon} {...labelProps}>
                              <Typography variant="span" sx={{fontSize:{xs:10, sm:12, md:16}, color:'common.black'}}>{label}</Typography>
                            </StepLabel>
                          </Step>
                        );
                      })}

                    </Stepper>
                    </Box>

                      <Box
                        sx={{
                          my:4,
                          display:'flex',
                          justifyContent:'center',
                          maxHeight:'60vh',
                          height:'auto'
                        }}
                      > 
                        
                        { 
                          activeStep === 0 ? (
                            <Box
                              sx={{
                                display:'flex',
                                flexDirection:{xs:'column-reverse', sm:'row'},
                                alignItems: 'center',
                                gap:4
                              }}
                            >
                              <Box sx={{maxWidth:300}}>
                                {
                                  (carModel > 0 && img)&&
                                  <img src={`/img/${img}`} alt="model" style={{width:'100%'}} />
                                }
                              </Box>
                              <FormControl fullWidth>
                                  <InputLabel>Car model</InputLabel>
                                  <Select
                                    value={carModel}
                                    label="Car model"
                                    onChange={handleCarModelSelect}
                                    sx={{minWidth:200}}
                                  >
                                    <MenuItem value=""> <em>None</em> </MenuItem>
                                    {
                                      models.map((model, index) => <MenuItem key={index} value={model.id}>{model.name}</MenuItem>)
                                    }
                                  </Select>
                              </FormControl>
                            </Box>
                          ) : activeStep === 1 ? (
                            <Box sx={{
                              display:'flex',
                              flexDirection:{xs:'column', sm:'row'},
                              alignItems: 'center',
                              gap: 2
                            }}>
                              <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DemoContainer components={['DatePicker']}>
                                  <DatePicker label="Date" value={date} onChange={(newValue) => setDate(newValue)} />
                                </DemoContainer>
                              </LocalizationProvider>
                              <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DemoContainer components={['TimePicker']}>
                                  <TimePicker label="Time" value={time} onChange={(newValue) => setTime(newValue)} />
                                </DemoContainer>
                              </LocalizationProvider>
                            </Box>
                          ) : (
                            <Box sx={{
                              display:'flex',
                              flexDirection:{xs:'column', sm:'row'},
                              alignItems: 'center',
                              gap:2
                            }}>
                              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                              <TextField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                              <TextField label="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Box>
                          )
                        }
                      </Box>
                    

                    {activeStep === steps.length ? (
                        <Box m={2}>
                          
                          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                            <Button variant="contained" onClick={handleBook}>Book a car</Button>
                          </Box>
                        </Box>
                    ) : (
                        <Box>
                          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:'center', pt: 2 }}>
                            <Button
                              variant="outlined"
                              color="inherit"
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              sx={{ mr: 1 }}
                            >
                              Back
                            </Button>
                            {isStepOptional(activeStep) && (
                              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                              </Button>
                            )}
                            <Button variant="outlined" onClick={handleNext}>
                              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                          </Box>
                        </Box>
                    )}
                </Box>
                <Snackbar
                  open={snackbarIsOpen}
                  autoHideDuration={6000}
                  onClose={handleCloseSnackbar}
                  message="The car is booked"
                />
            </Container>
        </Box>
    );
}