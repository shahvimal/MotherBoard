import React , {Component} from 'react';
import './shadow.css';

class Shadow extends Component{
    render(){
        return(
            <div className="shadow" onClick={this.props.click}></div>
        );
    }
}

export default Shadow;
