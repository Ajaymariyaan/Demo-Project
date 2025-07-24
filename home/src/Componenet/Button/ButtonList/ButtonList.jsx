import React from "react";
// import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import './ButtonList.css';
function ButtonList(){
  

     return(
        <div className="ButtonList">
            <button onClick={() => {}} className="headerButton" >RECEIVED</button>
            <button oonClick={() => {}} className="headerButton">INCUBATION</button>
            <button onClick={() => {}} className="headerButton">HATCHED</button>
            <button onClick={() => {}} className="headerButton"> TO BE DISCARDED</button>
            <button onClick={() => {}} className="headerButton"> DISCARDED</button>
            <button onClick={() => {}} className="headerButton">ALL</button>

        </div>
    )
}


export default ButtonList;

