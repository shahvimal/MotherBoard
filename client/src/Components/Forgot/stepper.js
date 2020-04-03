import React, { Fragment } from 'react';
import './forgot.css';
import Help from '@material-ui/icons/Help'
import { TextField , Paper , Tooltip} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Enter Your Sap-id', 'Select OTP Medium', 'Enter OTP'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
           <TextField
                                id="outlined-name"
                                label="Sap-id"
                                margin="normal"
                                variant="outlined"
                                className="text"
                                autoComplete="off"
                               
                                required
                            />
      );
    case 1:
      return (
          <Fragment>
          <FormControl component="fieldset" >
        <RadioGroup
          aria-label="gender"
          name="gender2"
        >
          <FormControlLabel
            value="Email"
            control={<Radio color="primary" />}
            label="Email"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Phone Number"
            control={<Radio color="primary" />}
            label="Phone Number"
            labelPlacement="end"
          />
        </RadioGroup> 
        </FormControl> 
        </Fragment> 
      );
    case 2:
      return (
               <TextField
                                id="outlined-name"
                                label="OTP"
                                margin="normal"
                                variant="outlined"
                                className="text"
                                autoComplete="off"
                               
                                required
                            />
      );
    default:
      return 'Unknown step';
  }
}

export default function Steps ({get , ver , errorhandle}) {


    

    function display(){
        document.getElementById('verify').style.display="none";
        document.getElementById('change').style.display="block";
    }


  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [error, seterror] = React.useState("");
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  function verified(){
    if(activeStep === 0){
      get(activeStep);
    }
    else if (activeStep === 1)
    {
      get(activeStep);
    }

    else if (activeStep ===2)
    {
      get(activeStep);
    }
    
  }

  function verify()
  {
    veri();
    errorhandle();
    var form = document.getElementById("forms");
            form.reset();
  }

  function veri(e){
    ver(e); 
  }

  

  return (
     <div className="login">
                <div className="top"><span className="one" style={{ color: "white" }}>mother</span><span style={{ color: "#414195" }}>Board</span></div>
                <div className="papers"id="verify" >
      <Stepper activeStep={activeStep} orientation="vertical" className="step">
        {steps.map((label, index) => (
          <Step key={label} >
            <StepLabel  >{label}</StepLabel>
            <StepContent>
              <Typography >{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick= {function(){
                      handleNext();
                      verified();
                    }}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Verify' : 'Next'}
                    
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} style={{padding:"10px" , fontSize:"20px" , display:"flex" , flexDirection:"column", textAlign:"center"}}>
          All steps completed - Click the button below to be redirected to password reset page
          <Button 
          variant="contained"
          color="primary"
          style={
              {
                  width:"30%",
                  margin:"2px auto"
              }
          }
          onClick={display}>
            Reset
          </Button>
        </Paper>
        )}
     </div>
     <div className="reset" id="change">
      <div className="headz">
        Change Password
      </div>
      <form onSubmit={veri} id="forms">
      <Tooltip title="Password should be of minimum 8 characters and must contain One Uppercase letter and a number" placement="bottom-start">
                            <TextField
                                id="outlined-name"
                                label="Enter Password"
                                margin="normal"
                                variant="outlined"
                                className="text"
                                autoComplete="off"
                                onChange={get}
                            />
                            </Tooltip>             
                            <TextField
                                id="outlined-name"
                                label="Confirm Password"
                                margin="normal"
                                variant="outlined"
                                className="text"
                                autoComplete="off"
                            />
                            {/* <div className="errors" id="name">
                            {error}
                            </div> */}
          <button type="button" className="button"   onClick= {function(){
                      display();
                      verify();
                    }}>
          Change Password
          </button>  
      </form>  
      </div>
     
     </div>
  );
}