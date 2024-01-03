import React, {useState} from "react";
import {Link} from "react-router-dom"

const ColorsList = ({colors})=>{
    return (
        <div className="ColorsList">
            <header className="ColorsList-Header">
                <h2>Add a color!</h2>
                <Link to="/colors/new">Click me!</Link>
            </header>
            <div className="ColorsList-Container">
                {colors.map((c)=> <li><Link to={{path: "/colors/"+c.name, state:c}}>{c.name}</Link></li>)}
            </div>
        </div>
    )
}

export default ColorsList;