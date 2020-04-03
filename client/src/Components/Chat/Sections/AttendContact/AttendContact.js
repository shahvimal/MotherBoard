import React from 'react';
import './AttendContact.scss';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  paddingfix: {
    padding: '0',
    margin: '0'
  },
  maxheight: {
    minHeight: '50px',
    maxHeight: '61px'
  }
}));

export default function AttendContact(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState('');

  const handleSubject = event => {
    setValue(event.target.value);
    props.subject(event.target.value);
  };

  const handleGroup = grpName => {
    props.group(grpName);
  };

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const subjects = [
    {
      value: 'mp',
      name: 'Microprocessor'
    },
    {
      value: 'tcs',
      name: 'TCS'
    },
    {
      value: 'aa',
      name: 'Advance Algorithms'
    },
    {
      value: 'dbms',
      name: 'DBMS'
    },
    {
      value: 'cn',
      name: 'Computer Networks'
    },
    {
      value: 'wd',
      name: 'Web Development'
    }
  ];

  return (
    <React.Fragment>
      <div id="groupOuterBox" style={{ height: window.innerHeight - 71 }}>
        <div className="header">
          <div className="groups">
            <h3>GROUPS</h3>
          </div>
        </div>
        <div>
          <div id="contactBar">
            <ExpansionPanel
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
              id="expand"
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className={classes.maxheight}
              >
                <Typography className={classes.heading}>SE</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.paddingfix}>
                <div
                  onClick={() => {
                    handleGroup('SE-A');
                  }}
                  className="a"
                >
                  <div className="avatar">
                    <h3>SE-A</h3>
                  </div>
                  <div className="groups">
                    <h3>SE-A</h3>
                  </div>
                </div>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails className={classes.paddingfix}>
                <div
                  onClick={() => {
                    handleGroup('SE-B');
                  }}
                  className="b"
                >
                  <div className="avatar">
                    <h3>SE-B</h3>
                  </div>
                  <div className="groups">
                    <h3>SE-B</h3>
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
              id="expand"
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                //style={{padding:"15px"}}
                className={classes.maxheight}
              >
                <Typography className={classes.heading}>TE</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.paddingfix}>
                <div
                  onClick={() => {
                    handleGroup('TE-A');
                  }}
                  className="a"
                >
                  <div className="avatar">
                    <h3>TE-A</h3>
                  </div>
                  <div className="groups">
                    <h3>TE-A</h3>
                  </div>
                </div>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails className={classes.paddingfix}>
                <div
                  onClick={() => {
                    handleGroup('TE-B');
                  }}
                  className="b"
                >
                  <div className="avatar">
                    <h3>TE-B</h3>
                  </div>
                  <div className="groups">
                    <h3>TE-B</h3>
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
              id="expand"
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                // style={{padding:"15px"}}
                className={classes.maxheight}
              >
                <Typography className={classes.heading}>BE</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.paddingfix}>
                <div
                  onClick={() => {
                    handleGroup('BE-A');
                  }}
                  className="a"
                >
                  <div className="avatar">
                    <h3>BE-A</h3>
                  </div>
                  <div className="groups">
                    <h3>BE-A</h3>
                  </div>
                </div>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails className={classes.paddingfix}>
                <div
                  onClick={() => {
                    handleGroup('BE-B');
                  }}
                  className="b"
                >
                  <div className="avatar">
                    <h3>BE-B</h3>
                  </div>
                  <div className="groups">
                    <h3>BE-B</h3>
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
          <div className="header">
            <div className="groups">
              <h3>SUBJECTS</h3>
            </div>
          </div>
          <Grid container>
            {subjects.map(subject => (
              <Grid item xs={12} className="AddBorder" key={subject.value}>
                <RadioGroup
                  aria-label="subject"
                  value={value}
                  name="subject"
                  onChange={handleSubject}
                  className="Addpadding"
                >
                  <FormControlLabel
                    value={subject.value}
                    control={<Radio color="primary" />}
                    label={subject.name}
                  />
                </RadioGroup>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
}
