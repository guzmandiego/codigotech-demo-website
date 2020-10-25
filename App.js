import React from 'react';

import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './pages/Navbar';
import Services from './pages/Services';

import Footer from './components/footer';


function App() {
  return (
    <Router>


      <Navbar />
      
      <Switch>
        <Route path='/home.js' exact component={Home}/>
        <Route path='/about.js' component={About}/>
        <Route path='/services.js' component={Services}/>
    
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
