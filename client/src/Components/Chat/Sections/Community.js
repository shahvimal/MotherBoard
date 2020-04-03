import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { style } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import './Community.scss';
import { instance } from '../../../App';

class Community extends Component {

  constructor(props){
    super(props);
    this.state={
      results:[],
      touched:false
    }
  }

  componentDidMount=async()=>{
    const res=await instance.post('/solved-grievances',{
      userType:"teacher",
      sap_id:"100"
    })
    console.log(res)
    this.setState({
      results:res.data.grievances,
      touched:true
    },()=>{
      console.log(this.state)
    })
  }

  render() {
    return (
      <div className="outer">
        <Grid container spacing={32}>
          <Grid item xs={12} className="headers">
            <Grid container spacing={32} style={{margin:'10px 0 0 0'}}>
              <Grid item xs={4} sm={4} md={4} style={{ height: '100%' }}></Grid>
              <Grid item xs={4} sm={4} md={4} className="heading">
                <span className="one" style={{ color: 'white' }}>
                  Res
                </span>
                <span style={{ color: '#414195' }}>ponses</span>
              </Grid>
              <Grid item xs={4} sm={4} md={4} style={{ height: '100%' }}></Grid>
            </Grid>
          </Grid>
          <Grid container spacing={32} >
          <div id="communityOuterBox">
                  <Grid item xs={12} id="communityOuterBox" >
                    <Grid container spacing={32} id="community" style={{ height: window.innerHeight - 152 }}>
                    {
            this.state.results.map(elm=>{
              return(
                      <Grid item xs={12} sm={12} md={12} style={{paddingBottom:'20px'}}>
                        <div className="details" style={{padding:'10px'}}>
                          <div className="headDet"> <u>Grievance</u>: {elm.grievance}</div>
                          <div className="det"> <u>Grievance ID</u>: {elm.id}</div>
                          <div className="det"><u>Grievance Details</u>: {elm.description}</div>
                          <div className="det"><u>Submission Date</u>: recently</div>
                          <div className="hover">Nothing to show</div>
                        </div>
                      </Grid>
                         )
            })
          }
                    </Grid>
                  </Grid>
                </div>
                </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Community);
