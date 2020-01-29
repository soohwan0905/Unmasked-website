import React, {Component} from "react";
import './App.css';
import Main from './Components/Main/Main.js';
import MyNavbar from "./Components/MyNavbar/MyNavbar.js";
import About from "./Components/About/About.js";

class App extends Component{
  render(){
    return <div>
      <MyNavbar></MyNavbar>
      <Main></Main>
      
    </div>;
  }
};

export default App;
