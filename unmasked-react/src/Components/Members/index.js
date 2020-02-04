import React, {Component} from "react";
import "./Members.scss";
import Member from "..//Member/Member.js";
import {memberData} from '../memberData';

class Members extends Component{

  // Attempted to import data, and pass it onto member component but for
  // but decided on putting them in manually for the sake of time
// state={
//     members:memberData
//   };

//   render(){
//     const{members}=this.state;
//     return ( 
//     <div className="membersPage">
//       <section className="membersList">
//             {members.map(member => {
//                 return(
//                     <Member key={member.id} member ={member}/>
//                 )
//             })}
//             </section>
//     </div>
//     );
//   }

  render(){
    return <div id="team" className="membersPage">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="./images/sanat_mohapatra.jpeg"></img>
            <h3 className="members-description">Sanat Mohapatra '20</h3>
            <h3 className="members-description">Founder</h3>
          </div>
          <div className="col">
          <img src="./images/john_schlachtenhaufen.jpeg"></img>
            <h3 className="members-description">John Schlachtenhaufen '20</h3>
          </div>
          <div className="col">
          <img src="./images/joe_hall.jpeg"></img>
            <h3 className="members-description">Joe Hall '20</h3>
          </div>
          <div className="col">
          <img src="./images/teddy_hill-weld.jpeg"></img>
            <h3 className="members-description">Teddy Hill-Weld '20</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <img src="./images/jon_song.jpeg"></img>
            <h3 className="members-description">Jon Song '20</h3>
          </div>
          <div className="col">
          <img src="./images/syed_tanveer.jpeg"></img>
            <h3 className="members-description">Syed Tanveer '21</h3>
          </div>
          <div className="col">
          <img src="./images/jenna_salvay.jpeg"></img>
            <h3 className="members-description">Jenna Salvay '20</h3>
          </div>
          <div className="col">
          <img src="./images/soohwan_park.jpeg"></img>
            <h3 className="members-description">Soohwan Park '21</h3>
          </div>
        </div>
      </div>
    </div>
  }
};

export default Members;