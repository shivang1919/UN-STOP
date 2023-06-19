import './App.css';
import React,{useEffect} from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import WebFont from "webfontloader"
import Header from "./component/layout/Header/Header.js"
import Footer from "./component/layout/Footer/Footer.js"
import Front from "./component/Front/Front"


function App() {
  useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"]
      }
    })
  })
  
  return (
    <Router>
      <Header />
      <Routes>
      <Route exact path="/" Component={Front} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
