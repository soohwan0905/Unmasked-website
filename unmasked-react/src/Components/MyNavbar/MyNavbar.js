import React, {Component} from "react";
import "./MyNavbar.scss";
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-scroll';

class MyNavbar extends Component{
  render(){
    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent fixed-top">        
        <a style={{color: "#F9F9F9"}} className="navbar-brand navbar-unmasked">
            unmasked
        </a>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon" data-toggle="collapse" data-target="#navbarMenu"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ml-auto">
          <Link 
              to="main" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-70}
              activeClass="active">
            <li className="nav-item">
              <a style={{color: "#3ec5c1"}} className="nav-link">download</a>
            </li>
            </Link>

            <Link 
              to="about" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-70}
              activeClass="active">
            <li className="nav-item">
              <a className="nav-link">about</a>
            </li>
            </Link>

            <Link 
              to="team" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-70}
              activeClass="active">
            <li className="nav-item">
              <a className="nav-link">team</a>
            </li>
            </Link>

            <Link 
              to="faq" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-70}
              activeClass="active">
            <li className="nav-item">
              <a className="nav-link">faq</a>
            </li>
            </Link>

            <li className="nav-item">
              <a className="nav-link" href="#resources">resources</a>
            </li>
          </ul>
        </div>
  </nav>);

  }
};

export default MyNavbar;