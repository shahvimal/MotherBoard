import React, { Fragment } from 'react';
import './forgot.css';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { TextField, Tooltip, Checkbox } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { instance } from '../../App'


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




export default function Forgot() {



    function display() {
        document.getElementById('verify').style.display = "none";
        setvars('outlined');
        document.getElementById('change').style.display = "block";
    }

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [pwd, setpwd] = React.useState("");
    const [cnfpwd, setcnfpwd] = React.useState("");
    const [error, seterror] = React.useState("");
    const [sap, setsap] = React.useState("");
    const [otp, setotp] = React.useState("");
    const [types, settypes] = React.useState("password");
    const [vars, setvars] = React.useState('standard');
    const [click1, setclick1] = React.useState(false);
    const [click2, setclick2] = React.useState(false);
    const [verified, setVerified] = React.useState(false);
    const steps = getSteps();

    function handlechange1(e) {
        setpwd(e.target.value);
        console.log(pwd);
    }

    function handlechange2(e) {
        setcnfpwd(e.target.value);
        console.log(pwd);
    }

    function handlechange3(e) {
        setsap(e.target.value);
        console.log(sap);
    }

    function handlechange4(e) {
        setotp(e.target.value);
        console.log(otp);
    }

    function getSteps() {
        return ['Enter Your Sap-id', 'Select OTP Medium', 'Enter OTP'];
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <TextField
                        id="outlined"
                        label="Sap-id"
                        margin="normal"
                        variant="outlined"
                        className="text"
                        autoComplete="off"
                        onChange={handlechange3}
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
                                    control={<Radio color="primary" id="check1" />}
                                    label="Email"
                                    labelPlacement="end"
                                    onClick={clicks1}

                                />
                                <FormControlLabel
                                    value="Phone Number"
                                    control={<Radio color="primary" id="check2" />}
                                    label="Phone Number"
                                    labelPlacement="end"
                                    onClick={clicks2}

                                />
                            </RadioGroup>
                        </FormControl>
                    </Fragment>
                );
            case 2:
                return (
                    <TextField
                        id="outlined"
                        label="OTP"
                        margin="normal"
                        variant="outlined"
                        className="text"
                        autoComplete="off"
                        required
                        onChange={handlechange4}
                    />
                );
            default:
                return 'Unknown step';
        }
    }

    function clicks1() {
        setclick1(true)

    }
    function clicks2() {
        setclick2(true)
    }


    const validate = () => {
        let numerr = "";
        let lenerr = "";
        let upperr = "";
        let paserr = "";
        let materr = "";
        const pwds = pwd
        seterror("");
        if (pwds && cnfpwd && pwds === cnfpwd) {
            var upperCaseLetters = /[A-Z]/g;
            if (!pwds.match(upperCaseLetters)) {
                console.log("valid")
                upperr = "cannot";
            }
            var numbers = /[0-9]/g;
            if (!pwds.match(numbers)) {
                console.log("number");
                numerr = "cannot";
            }
            if (pwds.length < 8) {
                console.log('length');
                lenerr = "cannot";
            }
        }
        else {
            if (!pwds || !cnfpwd) {
                console.log('khali');

                paserr = "Password cannot be empty";
            }
            else if (pwds !== cnfpwd) {
                console.log('same');

                materr = "Password Don't Match";
            }
        }

        if (upperr || numerr || lenerr || paserr || materr) {
            console.log(pwd);
            if (paserr) {
                console.log("set")
                seterror("Password cannot be empty");
                document.getElementById('name').style.display = "block";
            }
            else if (lenerr && upperr) {
                seterror("Password must contain one uppercase letter and should be of minimum length 8");
                document.getElementById('name').style.display = "block";
            }
            else if (lenerr && numerr) {
                seterror("Password must contain one numeric character and should be of minimum length 8");
                document.getElementById('name').style.display = "block";
            }
            else if (lenerr && upperr && numerr) {
                seterror("Password must contain one uppercase letter , one mumeric character and should be of minimum length 8");
                document.getElementById('name').style.display = "block";
            }
            else if (lenerr) {
                seterror("Password must be of minimum length 8");
                document.getElementById('name').style.display = "block";
            }
            else if (upperr) {
                seterror("Password must contain an uppercase letter");
                document.getElementById('name').style.display = "block";
            }
            else if (numerr) {
                seterror("Password must contain a numeric character");
                document.getElementById('name').style.display = "block";
            }
            else if (materr) {
                seterror("Passwords do not match");
                document.getElementById('name').style.display = "block";
            }
            console.log(error);
            document.getElementById("forms").reset();
            setpwd("");

            return false;
        }
        return true;
    }
    async function handlesubmit(e) {
        e.preventDefault();
        const valid = validate();
        if (valid) {
            console.log("success");
            var res = await instance.post('/password/change',{
                password:pwd,
                confirmPassword:cnfpwd,
                sapId:sap
            });
            if(res.data.code == 200){
                document.getElementById("forms").reset();
                document.getElementById('name').style.display = "none";
                setpwd("");
                seterror("");
                console.log("Password Changed");
                window.location.href="/login"
                return true;
            }else{
                console.log("Error from server check the body");
                return;
            }
        }
    };

    function val() {
        console.log("mai val() me hoon");
        var numbers = /[0-9]/g;
        if (activeStep === 0) {
            if (!sap) {
                return false
            }
            if (sap.length !== 11) {
                return false
            }
            if (!sap.match(numbers)) {
                return false
            }
            console.log('val() returning true')
            return true
        }
    }

    function rval() {
        if (activeStep === 1) {
            if (click1 || click2) {
                return true;
            }
            return false
        }
        return false
    }

    function oval() {
        if (activeStep === 2) {
            if (otp.length !== 4) {
                return false;
            }
            return true;
        }
        return false;
    }

    function nextsubmit(e) {
        console.log("hello");
        const valids = val();
        const rvalid = rval();
        const ovalid = oval();
        console.log(valids)
        console.log(rvalid)
        console.log(ovalid)
        if (valids && rvalid && ovalid) {
            console.log("successful");
        }
        if (ovalid == false && rvalid == true) {
            instance.post('/send/otp', { sap_id: sap, email: click1, phoneNo: click2 })
                .then(res => {
                    console.log(res);
                })
        }
        else if (ovalid == true) {
            instance.post('/otp/verify', {
                sap_id: sap,
                otp: otp
            })
                .then(res => {
                    console.log(res);
                })
        }
    }

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    const varifyOTP = async () => {
        var res = await instance.post('/otp/verify', {
            sap_id: sap,
            otp: otp
        })
        console.log(verified)
        if (res.data.code == 200) {
            setVerified(true)
            return true
        }
        return false

    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    function visible() {
        var checks = document.getElementById("check").checked
        if (checks === true) {
            settypes("text");
        }
        else {
            settypes("password");
        }
    }

    return (
        <div className="login">
            <div className="top"><span className="one" style={{ color: "white" }}>mother</span><span style={{ color: "#414195" }}>Board</span></div>
            <div className="papers" id="verify" >
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                                <Typography>{getStepContent(index)}</Typography>
                                <div className={classes.actionsContainer}>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.button}
                                        >
                                            Back
                                        </Button>
                                        {
                                            activeStep == 0 ?
                                                <Button
                                                    disabled={!val()}
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={function () {
                                                        handleNext();
                                                        nextsubmit();
                                                    }}
                                                    className={classes.button}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                                :
                                                activeStep == 1 ?
                                                    <Button
                                                        disabled={!rval()}
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={function () {
                                                            handleNext();
                                                            nextsubmit();
                                                        }}
                                                        className={classes.button}
                                                    >
                                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                    </Button>
                                                    :
                                                    <React.Fragment>
                                                        <Button
                                                            disabled={verified}
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={function () {
                                                                varifyOTP();
                                                            }}
                                                            className={classes.button}
                                                        >
                                                            Verify
                                                        </Button>
                                                        <Button
                                                            disabled={!verified}
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={function () {
                                                                handleNext();
                                                                nextsubmit();
                                                            }}
                                                            className={classes.button}
                                                        >
                                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                        </Button>
                                                    </React.Fragment>
                                        }
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} style={{ padding: "10px", fontSize: "20px", display: "flex", flexDirection: "column", textAlign: "center" }}>
                        All steps completed - Click the button below to be redirected to password reset page
                        <Button
                            variant="contained"
                            color="primary"
                            style=
                            {
                                {
                                    width: "30%",
                                    margin: "2px auto"
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
                <form id="forms" onSubmit={handlesubmit}>
                    <Tooltip title="Password should be of minimum 8 characters and must contain One Uppercase letter and a number" placement="bottom-start">
                        <TextField
                            id="outlined"
                            label="Enter Password"
                            margin="normal"
                            variant={vars}
                            type={types}
                            className="text"
                            autoComplete="off"
                            onChange={handlechange1}
                            InputLabelProps={{shrink:true}}
                        />
                    </Tooltip>
                    <TextField
                        id="outlined"
                        label="Confirm Password"
                        margin="normal"
                        variant={vars}
                        className="text"
                        type={types}
                        autoComplete="off"
                        onChange={handlechange2}
                        InputLabelProps={{shrink:true}}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox value="" id="check" color="primary" onClick={visible} />
                        }
                        label="Show Password" />
                    <div className="errors" id="name">
                        {error}
                    </div>
                    <button
                        className="button"
                        onClick={function () {
                            display();
                            handlesubmit.bind(this);
                        }}>
                        Change Password
                    </button>
                </form>
            </div>
        </div>
    );
}