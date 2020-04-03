import React , {Component} from 'react';
import './main.css';
import Sidebar from './grids/sidebar';
import Chat from './grids/chat';
import Group from './grids/group';

class Main extends Component{
    render(){
        return(
            <div className="main" >
            
                <Sidebar/>
                <Chat/>
                <Group/>
            </div>
        );
    }
}

export default Main;
