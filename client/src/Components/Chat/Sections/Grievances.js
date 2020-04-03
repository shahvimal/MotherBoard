import React, { Component } from 'react';
import './grievances.scss'  ;
import { TextField, Typography } from '@material-ui/core';
import { MuiThemeProvider, withTheme ,makeStyles, withStyles} from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import {theme} from '../../theme';
import { instance } from '../../../App'

const initstate = {
  sap: '',
  problem: '',
  description: '',
  saperr: false,
  problemerr: false,
  descriptionerr: false,
  img: '',
  imagePreviewUrl: '',
  open: false,
};

const styles = Theme => ({
  popUp: {
    left: '50%',
    [Theme.breakpoints.down('sm')]:{
      left: '0'
    }
  },
});


class Grievances extends Component {
  state = initstate;

  change =field=> e => {
    this.setState({
      [field]: e.target.value
    });
    console.log(this.state);
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  validate = () => {
    const {sap, problem, description } = this.state;
    this.setState({
      problemerr: false,
      descriptionerr: false,
      saperr: false,
    });
    if (sap.trim() === '') {
      this.setState({ saperr: true });
    }
    if (problem.trim() === '') {
      this.setState({ problemerr: true });
    }
    if (description.trim() === '') {
      this.setState({ descriptionerr: true });
    }
    if (sap.trim() === '' || problem.trim() === '' || description.trim() === '' ) {
      return false;
    }
    return true;
  };

  handlesubmit = async e => {
    e.preventDefault();
    const valid = this.validate();
    if (valid) {
      var form = document.getElementById("myform");
      form.reset();
      const res=await instance.post("/add-grievances",{sap_id:this.state.sap,grievance:this.state.problem,description:this.state.description})
      console.log(res);
      this.setState({initstate})
      if(res.status==200){
          this.setState({ open: true });
      }
    }
  };

  imgChange = e1 => {
    this.setState({
      img: e1.target.value,
      imagePreviewUrl: e1.target.files[0]
    });
  };

  disp = e2 => {
    console.log(this.state.imagePreviewUrl);
    var reader = new FileReader();
    var imgfield = document.getElementById('image-field');

    reader.onload = function() {
      if (reader.readyState == 2) {
        imgfield.src = reader.result;
      }
    };
    reader.readAsDataURL(this.state.imagePreviewUrl);
    document.getElementById('input').style.display = 'none';
    document.getElementById('output').style.display = 'flex';
  };

  image = () => {
    const realFileBtn = document.getElementById('real-file');
    const customTxt = document.getElementById('custom-text');
    realFileBtn.addEventListener('change', function() {
      if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(
          /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
      } else {
        customTxt.innerHTML = 'No image chosen';
      }
    });
  };

  render() {
    const {classes}=this.props;
    return (
      <MuiThemeProvider theme={theme}>
      <div className="login">
        <div className="top">
          <span className="one" style={{ color: 'white' }}>
            griev
          </span>
          <span style={{ color: '#414195' }}>ances</span>
        </div>
        <div className="paper">
          <div className="form">
            <form action="" onSubmit={this.handlesubmit} id="myform">
              <TextField
                id="outlined-name"
                label="Sap-id"
                margin="normal"
                variant="outlined"
                className="text"
                autoComplete="off"
                onChange={this.change('sap')}
                required
                error={this.state.saperr}
              />
              {this.state.saperr ? (
                <Typography className="error-message" variant="body2">
                  Please enter your SapId
                </Typography>
              ) : (
                ''
              )}
              <TextField
                id="outlined-name"
                label="Problem"
                margin="normal"
                variant="outlined"
                className="text"
                autoComplete="off"
                onChange={this.change('problem')}
                required
                error={this.state.problemerr}
              />
              {this.state.problemerr ? (
                <Typography className="error-message" variant="body2">
                  Please enter your problem
                </Typography>
              ) : (
                ''
              )}
              <TextField
                id="outlined-password-input"
                label="Description"
                margin="normal"
                variant="outlined"
                className="text"
                autoComplete="off"
                onChange={this.change('description')}
                multiline
                rows="4"
                required
                error={this.state.descriptionerr }
              />
              {this.state.descriptionerr ? (
                <Typography className="error-message" variant="body2">
                  Please describe your problem
                </Typography>
              ) : (
                ''
              )}
              <div className="inputs">
                <input
                  type="file"
                  id="real-file"
                  name="img"
                  className="inputfile"
                  onChange={this.imgChange}
                  onSubmit={this.disp}
                />
                <label for="real-file" onClick={this.image} id="custom-button">
                  CHOOSE AN IMAGE
                </label>
                <span id="custom-text"> No image chosen (Optional)</span>
              </div>

              <button className="button" onClick={this.handlesubmit}>
                Submit
              </button>
              <span></span>
            </form>
          </div>
        </div>
      </div>
      <div>
          <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent className={classes.popUp}>
            <DialogContentText>
              Sucessfully Submitted your Grievance.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
          </div> 
      </MuiThemeProvider>
    );
  }
}

export default withTheme((withStyles(styles)(Grievances)));
