import React, {Component} from "react";
import './App.css';
import Main from './Components/Main/Main.js';
import MyNavbar from "./Components/MyNavbar/MyNavbar.js";
import About from "./Components/About/About.js";
import Members from "./Components/Members/index.js";
import Faq from "./Components/Faq/Faq.js";
import Resources from "./Components/Resources/index.js";

class App extends Component{

  render(){
    return <div>
      <MyNavbar></MyNavbar>
      <Main></Main>
      <About></About>
      <Members></Members>
      <Faq></Faq>
      
      {/* Used Vanilla Javascript instead for resources */}
      {/* <Resources></Resources> */}
    </div>;
  }
};

export default App;
