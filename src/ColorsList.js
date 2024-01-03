import React from "react";
import {Link} from "react-router-dom"
import "./ColorsList.css"

const ColorsList = ({colors})=>{
    return (
        <div className="ColorsList">
            <header className="ColorsList-Header">
                <h2>Add a color!</h2>
                <Link to="/colors/new">Click me!</Link>
            </header>
            <div className="ColorsList-Container">
                <h3>Pick a color!</h3>
                {colors.map((c)=> <li><Link to={"/colors/"+c.name} state={{color:c}}>{c.name}</Link></li>)}
            </div>
        </div>
    )
}

export default ColorsList;