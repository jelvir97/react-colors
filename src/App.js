import { BrowserRouter } from 'react-router-dom';
import React, {useState} from 'react';
import './App.css';
import ColorRoutes from './Routes';

function App() {
  const [colors, setColors] = useState([{name: "blue", value:"#3275a8"}, {name:"yellow",value:"#f5e325"},{name:"red", value: "#f53f1b"}])

  const addColor = (newColor)=>{
    console.log(newColor)
    setColors(()=>[...colors, newColor])
    console.log(colors)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <ColorRoutes colors={colors} addColor={addColor}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
