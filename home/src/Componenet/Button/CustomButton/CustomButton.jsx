import React from "react";
import './CustomButton.css';


function CustomButton(props){

    return(<>
    <button className="button1"><img className="img1" src={props.imgSrc} alt={ props.imgAlt} ></img> </button>
    </>
    )
}
export default CustomButton;