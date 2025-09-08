
// import { useActionState, useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes, // ✅ this is correct
  Route
  
} from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light'); //whether dark mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  let toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');// ✅ correct usage
      document.body.style.backgroundColor ='#042743' 
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() =>{
      //   document.title ='TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() =>{ 
      //   document.title ='Instal TextUtils now';
      // },1500); 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white'
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About textUtils"/>
      <Navbar/> */}
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
          <Routes>
            {/* /users -->Component 1
            /users --> --> Component 2 */}
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Try TextUtils - Word counter , charecter counter , Remove extra spaces" mode={mode}/>}>
            </Route>
          </Routes>
       {/* <TextForm showAlert = {showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
        {/* <About/>   */}
      </div>
      </Router>
    </>
  );
}

export default App;
