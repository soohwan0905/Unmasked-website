import React, {Component} from "react";
import "./MyNavbar.scss";
import {Navbar} from 'react-bootstrap';

class MyNavbar extends Component{
  render(){
    return (
    <nav class="navbar navbar-expand-lg fixed-top">        
        <div style={{color: "#F9F9F9"}} className="navbar-unmasked">
            unmasked
        </div>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item nav-thing">
          <a style={{color: "#3ec5c1"}} class="nav-link" href="#">download</a>
        </li>
        <li class="nav-item nav-thing">
          <a class="nav-link" href="#">about</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">faq</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">resources</a>
        </li>
      </ul>
      
  </nav>);

  }
};

export default MyNavbar;