import { BrowserRouter } from 'react-router-dom';
import React, {useState} from 'react';
import './App.css';
import ColorRoutes from './Routes';

function App() {
  const [colors, setColors] = useState([{name: "blue", value:"#3275a8"}, {name:"yellow",value:"#f5e325"},{name:"red", value: "#f53f1b"}])
  return (
    <div className="App">
      <BrowserRouter>
        <ColorRoutes colors={colors} addColor={setColors}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
