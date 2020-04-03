import React, { Component } from 'react';
import './Login.scss';
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { instance } from '../../App';

const initstate = {
  name: '',
  pass: '',
  nameerr: '',
  passerr: '',
  types: 'password'
};

class Login extends Component {
  state = initstate;

  change1 = e => {
    this.setState({
      name: e.target.value
    });
    console.log(this.state);
  };

  change2 = e1 => {
    this.setState({
      pass: e1.target.value
    });
  };

  validate = () => {
    let nameerr = '';
    let passerr = '';

    if (!this.state.name) {
      nameerr = 'This field Cannot Be Empty';
      document.getElementById('name').style.display = 'block';
      //   document.getElementById('outlined-name').setAttribute("id" , "outlined-error");
    }

    if (!this.state.pass) {
      passerr = 'This field cannot be empty';
      document.getElementById('pass').style.display = 'block';
    }

    if (nameerr || passerr) {
      this.setState({ nameerr, passerr });
      return false;
    }
    return true;
  };

  handlesubmit = async e => {
    e.preventDefault();
    const valid = this.validate();
    if (valid) {
      const res = await instance.post('/login', {
        sap_id: this.state.name,
        password: this.state.pass
      });
      console.log(res);
      if (res.data.code == 500) {
        if (res.data.message == 'User') alert('Invalid Username');
        else if (res.data.message == 'Password') alert('Invalid Password');
        console.log(res.data.message);
        // localStorage.setItem('mBKey','abc')
        // window.location.reload()
      } else {
        console.log('hayo rabba');
        localStorage.setItem('mBKey', res.data.data.accessToken);
        localStorage.setItem('mBsap', res.data.data.sap_id);
        localStorage.setItem('mBname', res.data.data.fname+" "+ res.data.data.lname);
        window.location.href="/"
      }
      console.log('success');
      // var form = document.getElementById("myform");
      // form.reset();
      // this.setState({
      //     initstate
      // });
    }
  };

  visible = () => {
    var checks = document.getElementById('check').checked;
    if (checks === true) {
      this.setState({
        types: 'text'
      });
    } else {
      this.setState({
        types: 'password'
      });
    }
  };
  render() {
    return (
      <div className="login">
        <div className="top">
          <span className="one" style={{ color: 'white' }}>
            mother
          </span>
          <span style={{ color: '#414195' }}>Board</span>
        </div>
        <div className="paper">
          <div className="heads">LOGIN</div>
          <div className="form">
            <form action="" onSubmit={this.handlesubmit} id="myform">
              <TextField
                id="outlined-name"
                label="Sap-id"
                margin="normal"
                variant="outlined"
                className="text"
                autoComplete="off"
                onChange={this.change1}
                required
              />
              <div className="error1" id="name">
                {this.state.nameerr}
              </div>
              <TextField
                id="outlined-password-input"
                type={this.state.types}
                label="Password"
                margin="normal"
                variant="outlined"
                className="text"
                autoComplete="off"
                onChange={this.change2}
                required
              />
              <div className="error2" id="pass">
                {this.state.passerr}
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    value=""
                    id="check"
                    color="primary"
                    onClick={this.visible}
                  />
                }
                label="Show Password"
              />
              <button className="button" onClick={this.handlesubmit}>
                Sign In
              </button>
              <span>
                <h4>
                  <Link to="/forgot">Forgot Password?</Link>
                </h4>
              </span>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
