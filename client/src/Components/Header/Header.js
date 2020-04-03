import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Menu from '@material-ui/icons/Menu'
import { Button } from '@material-ui/core'

import './Header.scss'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
        return (
            <div className="Header" >
                <Button className="menuIconButton" onClick={()=>{this.props.navigationToggler()}} >
                    <Menu className="menuIcon"/>
                </Button>
                <div className="logoAligner" >
                    <div className="centralizer"></div>
                    <Link className="logo" to="/">mother<span>Board</span></Link>
                    <div className="centralizer">
                    <div className="left">Welcome {localStorage.getItem('mBname').split(' ')[0]}</div>
                    </div>
                </div>
                {/* <div className="left">
                <Link className="" to="/">mother<span>Board</span></Link>
                </div> */}
            </div>
        )
    }
}
