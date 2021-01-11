import React from 'react';
import './App.css';
import './don.css'
import Alumni from './Alumni'
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
    <div className="igp"></div>
      <Switch>
        <Route path={process.env.PUBLIC_URL+"/"} exact component={Home}/>
        <Route path={process.env.PUBLIC_URL+"/event"} exact component={Event}/>
        <Route path={process.env.PUBLIC_URL+"/login"} exact component={Login}/>
        <Route path={process.env.PUBLIC_URL+"/mentor"} exact component={News}/>
        <Route path={process.env.PUBLIC_URL+"/batchmates"} exact component={Batchmate}/>
        <Route path={process.env.PUBLIC_URL+"/donation"} exact component={Donation}/>
        <Route path={process.env.PUBLIC_URL+"/motivationa"} exact component={Motivationa}/>
        <Route path={process.env.PUBLIC_URL+"/motivationb"} exact component={Motivationb}/>
        <Route path={process.env.PUBLIC_URL+"/motivationc"} exact component={Motivationc}/>
        </Switch>
     
    </Router>

    </div>
  );
}

export default App;
