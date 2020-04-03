import React from 'react';
import './ContactBar.scss';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  paddingfix: {
    padding:'0',
    margin:'0',
  },
  maxheight:{
    minHeight:'50px',
    maxHeight:'61px',
  }
}));


export default function ContactBar(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    };

    const handleGroup=(val)=>{
        props.handleGroup(val)
    }

    return (
        <React.Fragment>
            <div id="groupOuterBox" style={{ height: window.innerHeight - 71 }}>
        <div className="header" >
            <div className="groups">
            <h3>GROUPS</h3>
            </div>
            </div>
            <div  >
                <div id="contactBar">
                    <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')} id="expand">
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        className={classes.maxheight}
                        >
                        <Typography className={classes.heading}>SE</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.paddingfix}>
                            <div className="a" onClick={()=>{handleGroup("SE-A")}} >
                            <div className="avatar" >
                                <h3>SE-A</h3>
                            </div>
                            <div className="groups">
                                <h3>SE-A</h3>
                            </div>
                            </div>
                            </ExpansionPanelDetails>
                            <ExpansionPanelDetails className={classes.paddingfix}>
                            <div className="b" onClick={()=>{handleGroup("SE-B")}} >
                            <div className="avatar" >
                                <h3>SE-B</h3>
                            </div>
                            <div className="groups">
                                <h3>SE-B</h3>
                            </div>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')} id="expand">
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
                            <div className="a" onClick={()=>{handleGroup("TE-A")}} >
                            <div className="avatar" >
                                <h3>TE-A</h3>
                            </div>
                            <div className="groups">
                                <h3>TE-A</h3>
                            </div>
                            </div>
                            </ExpansionPanelDetails>
                            <ExpansionPanelDetails className={classes.paddingfix}>
                            <div className="b" onClick={()=>{handleGroup("TE-B")}} >
                            <div className="avatar" >
                                <h3>TE-B</h3>
                            </div>
                            <div className="groups">
                                <h3>TE-B</h3>
                            </div>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')} id="expand">
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
                            <div className="a" onClick={()=>{handleGroup("BE-A")}} >
                            <div className="avatar" >
                                <h3>BE-A</h3>
                            </div>
                            <div className="groups">
                                <h3>BE-A</h3>
                            </div>
                            </div>
                            </ExpansionPanelDetails>
                            <ExpansionPanelDetails className={classes.paddingfix}>
                            <div className="b" onClick={()=>{handleGroup("TE-B")}} >
                            <div className="avatar" >
                                <h3>BE-B</h3>
                            </div>
                            <div className="groups">
                                <h3>BE-B</h3>
                            </div>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </div>
            </div>
        </React.Fragment>
        )
    }
