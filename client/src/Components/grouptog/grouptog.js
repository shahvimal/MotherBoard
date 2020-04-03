import React , {Component} from 'react';
import './grouptog.css';

class Grouptog extends Component{

    render(){

        let classlist = 'grouptog';
        let classlist2 = 'gr'

        if(this.props.show){
            classlist = 'grouptog shows';
            classlist2 = 'gr showed'
        }
        return(
            <div>
            <div className={classlist2}  onClick={this.props.toggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            <div className={classlist} id="show">   
                <div>
                <div className="divs">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
              Omnis quisquam laboriosam error veritatis quo deserunt dolorem mag <br/>
              ni tempore cumque, id eligendi autem at libero voluptates si <br/>
              milique nisi, adipisci dicta tenetur. <br/>
              
         </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Grouptog;