import React, {Component} from "react";
import "./Member.scss";

class Member extends Component{
  
    render(){
        const{id, img, name, info} = this.props.member;
        return ( 
            <article className="member">
                <div className="img-container">
                    <img src={img} alt=""></img>
                </div>
            <div>
                <h3>{name}</h3>
                <h3>{info}</h3>
            </div>
            </article>
        );
  }
};

export default Member;