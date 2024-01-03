import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ColorsList from "./ColorsList";
import ColorPage from "./ColorPage";

const ColorRoutes = ({colors, addColor})=>{
    return (
        <Routes>
            <Route exact path="/colors" element={<ColorsList colors={colors}/>}/>
            <Route path="/colors/:color" element={<ColorPage />}/>
            <Route path="*" element={<Navigate to="/colors" />} />
        </Routes>
    )
}

export default ColorRoutes;