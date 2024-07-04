import { useState } from "react";
import "./App.css";
import Signin from './Pages/Signin/Signin'
import Signup from "./Pages/Signup/Signup"

function App() {
  
  return (
    <div className="flex justify-center container_app">
  <Signup/>{" "} 
   {/* <Signin/>{" "}  */}
   </div>
  );
}

export default App;
