import React from "react";
import './CustomButton.css';


function CustomButton(props){

    return(<>
    <button ><img src={props.imgSrc} alt={ props.imgAlt} ></img> </button>
    </>
    )
}
export default CustomButton;