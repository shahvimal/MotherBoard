import React , {Component} from 'react';
import './downtog.css';

class Downtog extends Component{

    render(){
        let classlist = 'sides';

        if(this.props.show){
            classlist = 'sides show';
        }
        return(
            <div className={classlist}>
                
          This is Sidebar
            </div>
        );
    }
}

export default Downtog;