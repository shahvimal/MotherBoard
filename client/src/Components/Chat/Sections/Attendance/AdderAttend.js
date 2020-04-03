import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { theme } from '../../../theme';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Checkbox from '@material-ui/core/Checkbox';
import { instance } from '../../../../App';
import './AdderAttend.scss'

const semMapping={
  "SE-A":3,
  "SE-B":3,
  "TE-A":5,
  "TE-B":5,
  "BE-A":7,
  "BE-B":7
}

const styles = Theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  },
  radio: {
    margin: '0'
  },
  padding: {
    padding: '5px 0 5px 18px'
  },
  paddingHead: {
    padding: '20px'
  },
  border: {
    border: '1px solid rgba(0, 0, 0, 0.23)',
    padding: '5px',
    margin: '0',
    borderRadius: '4px'
  },
  legend: {
    fontSize: '0.8rem',
    textAlign: 'left',
    fontFamily: ['Helvetica', ' sans-serif'],
    color: 'rgb(117, 117, 117)'
  },
  textStyle: {
    [Theme.breakpoints.up('sm')]: {
      padding: '15px'
    }
  },
  addPadding: {
    padding: '25px'
  },
  desc: {
    fontFamily: '"Nunito Sans", sans-serif',
    fontWeight: 800,
    fontSize: '2rem'
  },
  colorHatao: {
    background: 'transparent',
    boxShadow: 'none'
  },
  expanded: { padding: '0', textAlign: 'center' }
});

class AdderAttend extends Component {
  state = {
    user:{},
    rows:[],
    loading:false
  };

  handleChange = name => event => {
    const user=this.state.user.filter(elm=>{
      return elm[name]==undefined
    });
    user.push({[name]:event.target.checked})
    this.setState({ 
      user: user },()=>{console.log(this.state)});
    console.log(this.props.subjectV);
  };

  createData = (sapid, fname, lname) => {
    return { sapid, fname, lname };
  };

  handleSubmitAttendance=async()=>{
    console.log('button clicked')
    const res=await instance.post('/postAttendance',{
      att:this.state.user,
      subject:this.props.subjectV
    })
    alert(res.data.message)
    
    console.log(res)
  }

  componentDidMount=async()=>{
    this.setState({loading:true})
    const res=await instance.post('/generate-list',{
      semester:semMapping[this.props.group],
      division:this.props.group.substring(3)
    })
    var user=res.data.students.map(elm=>{
      return {[elm.sap_id]:false}
    })
    this.setState({
      loading:false,
      rows:res.data.students,
      user
    })
    console.log(res)
  }

  componentWillReceiveProps=async(newProps)=>{
    if(newProps.group!==this.props.group){
      this.setState({loading:true})
      const res=await instance.post('/generate-list',{
        semester:semMapping[newProps.group],
        division:newProps.group.substring(3)
      })

      this.setState({
        loading:false,
        rows:res.data.students
      })
      console.log(res)
    }
  }

  render() {
    const { classes } = this.props;
    console.log(this.props)
    var isdisabled=(this.props.subjectV==""?"disabled":"")
    return (
      <React.Fragment>
        <div className="headers">
          <div style={{ margin: '10px' }}>
            <span className="one" style={{ color: 'white' }}>
              Add
            </span>
            <span style={{ color: '#414195' }}>Attendance</span>
          </div>
        </div>
        <div id="chatterOuterBox" style={{ height: window.innerHeight - 220 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.paddingHead}>Sap Id</TableCell>
                <TableCell className={classes.paddingHead}>First Name</TableCell>
                <TableCell className={classes.paddingHead}>Last Name</TableCell>
                <TableCell className={classes.padding}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                !this.state.loading?
                (this.state.rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell
                    className={classes.padding}
                    component="th"
                    scope="row"
                  >
                    {row.sap_id}
                  </TableCell>
                  <TableCell className={classes.padding}>
                    {row.fname}
                  </TableCell>
                  <TableCell className={classes.padding}>
                    {row.lname}
                  </TableCell>
                  <TableCell className={classes.padding}>
                    <Checkbox
                      //checked={this.state.checkedA}
                      onChange={this.handleChange(row.sap_id)}
                      color="primary"
                    />
                  </TableCell>
                </TableRow>
              ))
                ):(
                  <h3>Loading....</h3>
                )
            }
            </TableBody>
          </Table>
          <button className={"buttonAttendanceSubmit "+isdisabled} style={{margin:10}} disabled={this.props.subjectV==""} onClick={this.handleSubmitAttendance} >Submit</button>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AdderAttend);
