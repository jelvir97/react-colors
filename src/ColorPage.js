import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./ColorPage.css"

const ColorPage = ()=>{
    const { state } = useLocation()
    const {name, value} = state.color;
    console.log(name,value)
    return (
        <div className="ColorPage" style={{background:value}}>
            <h1>This is {name}</h1>
            <Link to="/colors">Go Back</Link>
        </div>
    )
}

export default ColorPage;