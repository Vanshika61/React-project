import React from "react";
import UserContext from "./utility/UserContext";

class ProfileClass extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy location"
      }
    }

    // console.log("Consturctor");
  }

  async componentDidMount(){
    // best place to API call
    const data = await fetch("https://api.github.com/users/Vanshika61");
    const json = await data.json();
    // console.log(json);

    this.setState({userInfo:json});
    // console.log("componentDidMount");

    // this.timer = setInterval(() => {
    //   console.log("Hello Vanshika, Accenture is calling you");
    // }, 1000);
  }

  componentDidUpdate(){
    // best place to API call

    // console.log("componentDidUpdate");
  }

  componentWillUnmount(){
    // best place to API call
    // clearInterval(this.timer);
    // console.log("componentWillUnmount");
  }


    render() {

      // console.log("render");
      return (
        <div>

            <hr />
            
            <UserContext.Consumer>
              {/* this data is comming from context  */}
              {({user})=> <span className="flex justify-center text-3xl font-bold text-red-900">{user.name}</span>}
            </UserContext.Consumer>

            <h1>Profile Class Component</h1>
            <img src={this.state.userInfo.avatar_url} alt="usersProfile" />
            <h2>{this.state.userInfo.name}</h2>
            <h2>{this.state.userInfo.location}</h2>
          {/* <h3>Name : {this.props.name}</h3> */}
        </div>
      );
    }
}

export default ProfileClass;