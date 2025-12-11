import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/textForm';

function App() {
  return (
    <>
      <Navbar title='TextUtils'/>
     <div className="container">
       <TextForm heading='Enter text to analyze Below'/>
     </div>
      </>
   
  );
}

export default App;
