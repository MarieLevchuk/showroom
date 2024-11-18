import { useTheme } from "@emotion/react";
import { Box, Button, Container, FormControl, InputLabel, MenuItem, NativeSelect, Paper, Select, Skeleton, Step, StepLabel, Stepper, TextField, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";

const steps = ['Select a car', 'Select date and time', 'Note smth else'];

export default function TestDriveForm(){
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
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
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
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
      setActiveStep(0);
    };
      

    return (
        <Box>
            <Container maxWidth='lg'>
                <Box mx={'auto'} sx={{ width: '50%' }}>
                    <Stepper activeStep={activeStep}>
                      {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                          labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                          );
                        }
                        if (isStepSkipped(index)) {
                          stepProps.completed = false;
                        }

                        return (
                          <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                          </Step>
                        );
                      })}

                    </Stepper>

                    {activeStep === steps.length ? (
                        <>
                          <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                          </Typography>
                          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                          </Box>
                        </>
                    ) : (
                        <>
                          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                              color="inherit"
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              sx={{ mr: 1 }}
                            >
                              Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                              </Button>
                            )}
                            <Button onClick={handleNext}>
                              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                          </Box>
                        </>
                    )}
                </Box>
            </Container>
        </Box>
    );
}