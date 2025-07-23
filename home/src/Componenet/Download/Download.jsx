import React from "react";
import './Download.css'
function DownloadButton(props){

    return( 
        <>
        <div>
             <button className="button" onClick={props.actions}  ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUO8Qa6ABt8B0WQaC7n9_0qPTDoCWsB8lPw&s"/></button>
             </div>
        </>
    )

}

export default  DownloadButton;