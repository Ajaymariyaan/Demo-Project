import React from "react";
// import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import './ButtonList.css';
import TableOne from "../../Table/TableOne";


// function ButtonList(props){
function ButtonList(){

  

     return(
        <div className="ButtonList">
            <button onClick={() => TableOne()} className="headerButton" >RECEIVED</button>
            <button onClick={() =>TableOne()} className="headerButton">INCUBATION</button>
            <button onClick={() => TableOne()} className="headerButton">HATCHED</button>
            <button onClick={() => TableOne()} className="headerButton"> TO BE DISCARDED</button>
            <button onClick={() => TableOne()} className="headerButton"> DISCARDED</button>
            <button onClick={() => TableOne()} className="headerButton">ALL</button>

        </div>

        //  <div className="ButtonList">
        //     <button onClick={() => {{props.linkRecievedButton}}} className="headerButton" >RECEIVED</button>
        //     <button oonClick={() => {{props.linkIncubationButton}}} className="headerButton">INCUBATION</button>
        //     <button onClick={() => {{props.linkHatchedButton}}} className="headerButton">HATCHED</button>
        //     <button onClick={() => {{props.linkToBeDiscardButton}}} className="headerButton"> TO BE DISCARDED</button>
        //     <button onClick={() => {{props.linkDiscardButton}}} className="headerButton"> DISCARDED</button>
        //     <button onClick={() => {{props.linkAllButton}}} className="headerButton">ALL</button>

        // </div>
    )
}


export default ButtonList;

