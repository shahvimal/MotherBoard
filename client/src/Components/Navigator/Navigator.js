import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import chats from '../../images/chat.png';
import './Navigator.scss';

export default class Navigator extends Component {
  logout = () => {
    localStorage.removeItem('mBKey');
    window.location.href = '/';
  };
  render() {
    return (
      <React.Fragment>
        <div id="navigateOuterBox" style={{ height: window.innerHeight - 69 }}>
          <div id="navigate">
            <Grid container spacing={32} className="content">
              <Grid item xs={3} className="item">
                <img className="ficon" src={chats} alt="" />
              </Grid>
              <Grid item xs={9}>
                <Link
                  to="/chats"
                  style={{ color: 'rgba(251, 246, 246,0.9)' }}
                  id="chats"
                >
                  <h3>Chats</h3>
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={32} className="content">
              <Grid item xs={3} className="item">
                <img className="ficon" src={chats} alt="" />
              </Grid>
              <Grid item xs={9}>
                <Link to="/grievances" style={{ color: 'rgba(251, 246, 246,0.9)' }} id="grievances">
                  <h3>Grievances</h3>
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={32} className="content">
              <Grid item xs={3} className="item">
                <img className="ficon" src={chats} alt="" />
              </Grid>
              <Grid item xs={9}>
                {' '}
                <Link to="/responses" style={{ color: 'rgba(251, 246, 246,0.9)' }} id="responses">
                  <h3>Responses</h3>
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={32} className="content">
              <Grid item xs={3} className="item">
                <img className="ficon" src={chats} alt="" />
              </Grid>
              <Grid item xs={9}>
                {' '}
                <Link to="/notes" style={{ color: 'rgba(251, 246, 246,0.9)' }} id="notes">
                  <h3>Notes</h3>
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={32} className="content">
              <Grid item xs={3} className="item">
                <img className="ficon" src={chats} alt="" />
              </Grid>
              <Grid item xs={9}>
                {' '}
                <Link to="/events" style={{ color: 'rgba(251, 246, 246,0.9)' }} id="events">
                  <h3>Events/Calander</h3>
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={32} className="content">
              <Grid item xs={3} className="item">
                <img className="ficon" src={chats} alt="" />
              </Grid>
              <Grid item xs={9}>
                <Link to="/attendance" style={{ color: 'rgba(251, 246, 246,0.9)' }} id="attendance">
                  <h3>Attendance</h3>
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={32} className="content">
              <Grid item xs={3} className="item">
                <img className="ficon" src={chats} alt="" />
              </Grid>
              <Grid item xs={9}>
                <Link to="/attendanceadd" style={{ color: 'rgba(251, 246, 246,0.9)' }} id="attendance">
                  <h3>Attendance Add</h3>
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={32} className="content">
              <Grid item xs={3} className="item">
                <img className="ficon" src={chats} alt="" />
              </Grid>
              <Grid item xs={9}>
                <div className="content" id="log-out" onClick={this.logout}>
                  <h3>Log Out</h3>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
