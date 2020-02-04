import React, {Component} from "react";
import "./Main.scss";
import { Element } from 'react-scroll'


class Main extends Component{
  render(){
    return ( 
      <div className="main view" id="main">
        <div className="full-bg-img">
          <div className="container">
            <div className="row align-items-end main-unmasked">
              <div className="col">
                <div>unmasked</div><div>project</div>
              </div>
            </div>
            <div className="row main-description">
            <div className="col">
            an anonymous, mental health social media <br></br>mobile application for Dartmouth students
              </div>
            </div>
            <div className="row">
            <div className="col last-row">
            <a href="https://apps.apple.com/ae/app/unmasked-project/id1439705803"><img src={require("./store.png")} width="300px" height="93.6px"></img></a>
              </div>
            </div>
        </div>
      </div>
    </div>
    );
  }
};

export default Main;