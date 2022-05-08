import React, { Component } from "react";
import "./home.css";
import fire from "../../../config/fire";

class Home extends Component {
  // logout function
  logout = () => {
    fire.auth().signOut();
  };

  render() {
    var currentUser = fire.auth().currentUser;
    return (
      <div className="userBlock">
        <div className="welcome">
          <span>Hi, {currentUser.displayName} ! You are logged in !</span>
          <button className="exit" onClick={this.logout}>
            Exit
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
