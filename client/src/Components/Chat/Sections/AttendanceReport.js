import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import './AttendanceReport.scss';
import { theme } from '../../theme';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

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
    padding: '20px',
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
  expanded: { padding: '0',textAlign:'center' }
});

class AttendanceReport extends Component {
  createData = (sapid, sub1, sub2, sub3, sub4, sub5, sub6, total) => {
    return { sapid, sub1, sub2, sub3, sub4, sub5, sub6, total };
  };
  render() {
    const { classes } = this.props;

    const rows = [
      this.createData('60004170100', 98, 98, 98, 98, 98, 98, 98),
      this.createData('60004170101', 98, 99, 98, 99, 98, 99, 99),
      this.createData('60004170102', 98, 99, 99, 99, 98, 98, 99),
      this.createData('60004170103', 98, 98, 98, 98, 98, 98, 98),
      this.createData('60004170104', 98, 98, 98, 98, 98, 98, 99),
    ];
    return (
      <div className="outer">
        <Grid container spacing={32}>
          <Grid item xs={12} className="headers">
            <Grid container spacing={32} style={{ margin: '10px 0 0 0' }}>
              <Grid item xs={3} sm={4} md={4} style={{ height: '100%' }}></Grid>
              <Grid item xs={3} sm={4} md={4} className="heading">
                <span className="one" style={{ color: 'white' }}>
                  Atten
                </span>
                <span style={{ color: '#414195' }}>dance</span>
              </Grid>
              <Grid item xs={4} sm={4} md={4} style={{ height: '100%' }}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className="attendBar" style={{ height: window.innerHeight - 70 }}>
            <Grid container spacing={32}>
              <Grid item xs={12} sm={12} md={12}>
                <Hidden only={['xs']}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell className={classes.padding}>
                          Sap Id
                        </TableCell>
                        <TableCell className={classes.padding}>
                          Subject 1
                        </TableCell>
                        <TableCell className={classes.padding}>
                          Subject 2
                        </TableCell>
                        <TableCell className={classes.padding}>
                          Subject 3
                        </TableCell>
                        <TableCell className={classes.padding}>
                          Subject 4
                        </TableCell>
                        <TableCell className={classes.padding}>
                          Subject 5
                        </TableCell>
                        <TableCell className={classes.padding}>
                          Subject 6
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => (
                        <TableRow key={row.name}>
                          <TableCell
                            className={classes.padding}
                            component="th"
                            scope="row"
                          >
                            {row.sapid}
                          </TableCell>
                          <TableCell className={classes.padding}>
                            {row.sub1}%
                          </TableCell>
                          <TableCell className={classes.padding}>
                            {row.sub2}%
                          </TableCell>
                          <TableCell className={classes.padding}>
                            {row.sub3}%
                          </TableCell>
                          <TableCell className={classes.padding}>
                            {row.sub4}%
                          </TableCell>
                          <TableCell className={classes.padding}>
                            {row.sub5}%
                          </TableCell>
                          <TableCell className={classes.padding}>
                            {row.sub6}%
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Hidden>
                <Hidden only={['sm', 'md', 'lg', 'xl']}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell className={classes.paddingHead}>
                          Sap Id
                        </TableCell>
                        <TableCell className={classes.padding}></TableCell>
                          <TableCell  className={classes.padding}></TableCell>
                          <TableCell className={classes.padding}></TableCell>
                        <TableCell className={classes.paddingHead}>
                          Total
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => (
                        <TableRow key={row.name}>
                          <TableCell
                            className={classes.padding}
                            component="th"
                            scope="row"
                          >
                            {row.sapid}
                          </TableCell>
                          <TableCell className={classes.padding}></TableCell>
                          <TableCell className={classes.padding}></TableCell>
                          <TableCell className={classes.padding}></TableCell>
                          <TableCell className={classes.padding}>
                            <ExpansionPanel className={classes.colorHatao}>
                              <ExpansionPanelSummary expandIcon={<AddIcon/>}>
                                <Typography className={classes.heading}>
                                  {row.total}%{'  '}
                                </Typography>
                              </ExpansionPanelSummary>
                              <ExpansionPanelDetails className={classes.expanded}>
                                <Grid container>
                                  <Grid item xs={4}>MP:   {row.sub1}</Grid>
                                  <Grid item xs={4}>CN:   {row.sub2}</Grid>
                                  <Grid item xs={4}>AA:   {row.sub3}</Grid>
                                  <Grid item xs={4}>TCS:  {row.sub4}</Grid>
                                  <Grid item xs={4}>BCE:  {row.sub5}</Grid>
                                  <Grid item xs={4}>DBMS: {row.sub6}</Grid>
                                </Grid>
                              </ExpansionPanelDetails>
                            </ExpansionPanel>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AttendanceReport);
