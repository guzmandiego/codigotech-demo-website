import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Footer from './components/footer';
import LandingPage from './pages/LandingPage';
import Navigationbar from './components/NavigationBar'



function App() {
 

  return (
    <div className="main">
      <Router>
    
    <Navigationbar/>
    <Switch>
      
      <Route path='/' component={LandingPage} exact/>
      
      <Route path='/Home.js' component={Home} exact/>
      <Route path='/about.js' component={About}/>
      <Route path='/services.js' component={Services}/>
      
    </Switch>
    <Footer/>
    
  </Router>
    </div>
    
    
  );
}

export default App;
