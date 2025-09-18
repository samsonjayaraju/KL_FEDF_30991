import "./App.css";
import Home from '../src/Home'
import About from '../src/about'
import Login from "./Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/> 
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
