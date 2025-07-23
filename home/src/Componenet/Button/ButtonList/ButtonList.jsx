import React from "react";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import './ButtonList.css';
function ButtonList(){
  

     return(
        <div className="ButtonList">
            <button onClick={() => {}} className="ButtonStyle" >RECEIVED</button>
            <button oonClick={() => {}} className="ButtonStyle">INCUBATION</button>
            <button onClick={() => {}} className="ButtonStyle">HATCHED</button>
            <button onClick={() => {}} className="ButtonStyle"> TO BE DISCARDED</button>
            <button onClick={() => {}} className="ButtonStyle"> DISCARDED</button>
            <button onClick={() => {}} className="ButtonStyle">ALL</button>

        {/* <ButtonTemplate onClick=" "  name="RECEIVED"/>
         <ButtonTemplate name="INCUBATION"/>
          <ButtonTemplate  name="HATCHED"/>
           <ButtonTemplate  name="TO BE DISCARDED"/>
            <ButtonTemplate  name="DISCARDED"/>
             <ButtonTemplate  name=" ALL"/> */}
        </div>
    )
}


export default ButtonList;

