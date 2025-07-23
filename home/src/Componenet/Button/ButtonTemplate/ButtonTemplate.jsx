import React from "react";
import './ButtonTemplate.css'
function ButtonTemplate(props){

    return(
        <>
        <div>
        <button className="ButtonTemplateStyle" >{props.name} </button>
        </div>

        </>
    )
}
export default ButtonTemplate