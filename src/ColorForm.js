import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const ColorForm = ({addColor})=>{
    const [formData, setFormData] = useState({name:"", value:"#4dcf30"})
    const navigate = useNavigate();
    const handleChange = (evt)=>{
        setFormData({
            ...formData,
            [evt.target.name]:evt.target.value
        })
    }

    const onSubmit = (evt)=>{
        evt.preventDefault()
        addColor(formData)
        navigate('/colors')
    }

    return (
        <div className="ColorForm">
            <form onSubmit={onSubmit}>
                
                <label htmlFor="name">Color Name: </label>
                <input type="text" id="name" name="name" value={formData.name} placeholder="Color Name" onChange={handleChange}/>

                <label htmlFor="value">Color</label>
                <input type="color" id="value" value={formData.value} name="value" onChange={handleChange}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default ColorForm;