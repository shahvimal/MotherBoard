import React, { Component } from 'react'

import Header from '../Header/Header'
import './Layout.scss'
import Navigator from '../Navigator/Navigator'

export default class Layout extends Component {
    constructor(props){
        super(props);
        this.alligator = React.createRef();
        this.state={
            openNavBar:false
        }
    }
    navigationToggler=()=>{
        // if(this.state.openNavBar==0){
            console.log('khudka')
            console.log(this.state)
            this.setState(prevState=>{
                return{openNavBar:!prevState.openNavBar}
            })
        // }
    }

    render() {
        var toggler=this.state.openNavBar===true?"navigator show":"navigator"
        return (
            <React.Fragment>
                <Header navigationToggler={this.navigationToggler} />
                <div id="layoutBody">
                    <div className={toggler} >
                        <Navigator/>
                    </div>
                    {this.state.openNavBar===true?
                        <div style={{position:"absolute",width:"100%",height:"100%",background:"rgba(0,0,0,0.7)",zIndex:100}} onClick={this.navigationToggler}></div>
                        :null
                    }
                    {this.props.child}
                </div>
            </React.Fragment>
        )
    }
}
