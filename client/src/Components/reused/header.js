import React , {Component} from 'react';
import './header.css';

class Header extends Component{

    // addclass=(e)=>{
    //     document.getElementById("dragline").style.transform="translateY(10%)";
    //     document.getElementById("dragcirc").style.transform="translateY(10%)";
    // }

    render(){   
        return(
                <header>
                    <nav>
                    <div className="ham" onClick={this.props.toggles} draggable="true">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="logo">M</div>
                    <div className="head"><span className="one">mother</span><span style={{color:"#2937a3"}}>Board</span></div>
                    <div className="space"></div>
                    <div className="signin">Sign In</div>
                    </nav>
                </header>
        );
    }
}

export default Header;
