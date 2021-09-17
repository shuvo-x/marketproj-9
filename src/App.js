import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import RouteX from './RouteX';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
     <>
         <Router>
         <Navbar />
         <Switch>
            <RouteX />
         </Switch>
        <Footer />
       </Router>
  
     </>
  );
}

export default App;
