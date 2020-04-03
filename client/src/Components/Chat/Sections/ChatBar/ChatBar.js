import React, { Component } from 'react'
import { Send } from '@material-ui/icons';
import { Query, Mutation, Subscription } from "react-apollo";
import { gql } from "apollo-boost";

import "./ChatBar.scss"

const ADD_MESSAGE = gql`
  mutation addMessage($group: String!, $sapId: String!,$message: String!) {
    addMessage(group: $group, sapId: $sapId, message:$message) {
      body
      group
      userName
    }
  }
`;

const MESSAGE_QUERY=gql`
query($sapId:String!,$group:String!){
    messages(sapId:$sapId,group:$group){
        body
        userName
        sapId
        group
    }
  }`

const MESSAGE_SUBSCRIPTION = gql`
  query onNewMessage($group:String!){
      newMessage(group:$group){
          body
          group
          userName
          sapId
      }
  }
`
const unsubscribe=null

const subsMessages = (group=this.props.groupName) => (
    
    <Subscription
        subscription={MESSAGE_SUBSCRIPTION}
        variables={{ group }}
    >
    {({ data, loading }) => (
        !loading&&data.newMessage!=null?
        <h4>{data.newMessage.body}{        console.log(data)
        } </h4>
        :null
    )}
    </Subscription>
);



// const ExchangeRates = () => (
//     <Query
//         query={gql`
//         query($sapId:String!,$group:String!){
//           messages(sapId:$sapId,group:$group){
//               body
//               userName
//               sapId
//               group
//           }
//         }
//       `}
//     >
//         {({ loading, error, data }) => {
//             if (loading) return <p>Loading...</p>;
//             if (error) return <p>Error :(</p>;
//             console.log(data)
//             return <h3>lol</h3>//data.rates.map(({ currency, rate }) => (
//             //   <div key={currency}>
//             //     <p>{currency}: {rate}</p>
//             //   </div>
//             // ));
//         }}
//     </Query>
// );

export default class ContactBar extends Component {

    messager = (e) => {

        e.preventDefault();

        var today = new Date()

        var msg = document.getElementById('msgText').value;
        if (!msg.trim() == "") {
            document.getElementById('msgText').value = "";

            var scrollable = document.getElementById('chatterBox')

            scrollable.innerHTML += `
                <div class="message sent">
                    ${msg}
                                <span class="metadata">
                        <span class="time">${today.getHours()}:${today.getMinutes()}</span><span class="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7" /></svg></span>
                    </span>
                </div>
            `
            scrollable.scrollTop = scrollable.scrollHeight

        }

    }

    componentDidMount() {
        if (this.props.groupName != "") {
            console.log("didmount")
            var scrollable = document.getElementById('chatterBox')
            scrollable.scrollTop = scrollable.scrollHeight
        }
    }

    componentWillReceiveProps = async (newProps) => {

        // if(this.props.groupName!=newProps.groupName&&newProps.groupName!=""){
        //     this.allMessages()        
        // }


    }

    addMessages = (sapId) => {

        return (
            <Mutation mutation={ADD_MESSAGE}  >
                {(addMessage, { data }) => (
                    <div>
                        <form className="typer" onSubmit={(e) => {
                            e.preventDefault();
                            console.log(typeof (document.getElementById("msgText").value))
                            var message = document.getElementById("msgText").value;
                            this.messager(e);
                            addMessage({ variables: { group: this.props.groupName, message: message, sapId: sapId } })
                        }} >
                            <div className="inputDiv" >
                                <input id="msgText" type="text" placeholder="Type a message" autoFocus />
                            </div>
                            <button class="send" type="submit" >
                                <div class="circle">
                                    <Send style={{ marginLeft: 5 }} />
                                </div>
                            </button>
                        </form>
                    </div>
                )}
            </Mutation>
        );
    };

    allMessages = (sapId) => (

        <Query
            query={gql`
            query($sapId:String!,$group:String!){
                messages(sapId:$sapId,group:$group){
                    body
                    userName
                    sapId
                    group
                }
              }
          `}
            variables={{ group: this.props.groupName, sapId: "" }}
            pollInterval={500}
        >
            {({ loading, error, data }) => {
                var today = new Date()
                var uName = localStorage.getItem("mBname")

                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                console.log(data)
                return data.messages.map(({ body, sapId, userName }) => (
                    userName != uName ?
                        <div style={{ width: "100%", position: "relative", display: "flex", alignItems: "center" }} >
                            <div className="circleSender" >
                                {userName.substring(0, 1)}{userName.split(" ")[1].substring(0, 1)}
                            </div>
                            {console.log(uName)}
                            {console.log(userName)}
                            <div class="message received">
                                {body}
                                <span class="metadata" ><span class="time">9:03 pm</span></span>
                            </div>
                        </div>
                        :
                        <div class="message sent">
                            {body}
                            <span class="metadata" ><span class="time">{today.getHours()}:${today.getMinutes()}</span></span>
                        </div>
                ));
            }}
        </Query>
    );

    // subsMessages = () => (
    //     <Query
    //         query={MESSAGE_SUBSCRIPTION}
    //         pollInterval={1000}
    //         variables={{ group:this.props.groupName }}
    //     >
    //     {({ data, loading }) => (
    //         !loading&&data.newMessage!=null?
    //         <h4>{data.newMessage.body} </h4>
    //         :null
    //     )}
    //     </Query>
    // );

    render() {
        console.log(this.props)
        var sapId = localStorage.getItem('mBsap')

        return (

            this.props.groupName != '' ? (
                <React.Fragment>
                    <div className="title" >
                        <div className="avatar" >
                            <h3>{this.props.groupName}</h3>
                        </div>
                        <div className="class_name" >
                            <h3>{this.props.groupName}</h3>
                        </div>
                    </div>
                    <div id="chatterOuterBox" style={{ height: window.innerHeight - 220 }} >
                        <div id="chatterBox" style={{ minHeight: "300" }} >
                            {
                                this.allMessages(sapId)
                            }
                        </div>
                    </div>
                    {this.addMessages(sapId)}
                </React.Fragment>
            ) :
                (
                    <div>
                        <h3>Please select any group first</h3>
                    </div>)

        )
    }
}
