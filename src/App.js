import React from 'react';
import './App.css';

import Alumni from './Alumni'
import About from './About'
import News from './News'
import Donation from './Donation'
import Login from './Login'
import Event from './Event'
import Home from './Home'
import Batchmate from './Batchmate'
import Motivationa from './Motivationa'
import Motivationb from './Motivationb'
import Motivationc from './Motivationc'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {

  

  return (
    <div >
  
    <Router>
    <Alumni />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/event" exact component={Event}/>
        <Route path="/about" exact component={About}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/news" exact component={News}/>
        <Route path="/batchmates" exact component={Batchmate}/>
        <Route path="/donation" exact component={Donation}/>
        <Route path="/motivationa" exact component={Motivationa}/>
        <Route path="/motivationb" exact component={Motivationb}/>
        <Route path="/motivationc" exact component={Motivationc}/>
        </Switch>
     
    </Router>

    </div>
  );
}

export default App;
