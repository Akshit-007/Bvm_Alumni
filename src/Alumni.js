import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import './index.css'



 function Alumni() {
    
    const [display,setdisplay]=useState(true);

    function show()
    {
        if(display)
        {
            setdisplay(false);
        }
        else
        {
            setdisplay(true);
        }
    }

    
  return (
   <div>
    <div className="head">
    <div className="img"></div>
    <Link to='/'  style={{textDecoration: 'none' , color:'black'}}><div className="name">BVM,<br/> ALUMNI ASSOCIATION</div></Link>
        <div className="contact">&nbsp;  <i className="fa fa-facebook-square" ></i>&nbsp;<i className="fa fa-linkedin-square" ></i>&nbsp;<i className="fa fa-instagram" ></i>&nbsp;<i className="fa fa-twitter-square" ></i>&nbsp;<i className="fa fa-youtube-square" ></i></div>
        <div className="search"><input className="intx" type="text" placeholder="search"></input> <button className="srch"><i className="fa fa-search"></i></button> &nbsp;<i className="fa fa-server"  onClick={()=>{show()}}></i></div>
    </div>
    <div className="nav">
        <ul>
             <Link to='/' style={{textDecoration: 'none'}}><li>HOME</li></Link>
            <Link to='/event' style={{textDecoration: 'none'}}><li>EVENTS</li></Link>
            <Link to='/news' style={{textDecoration: 'none'}}><li>NEWS</li></Link>
            <Link to='/batchmates' style={{textDecoration: 'none'}}><li>BATCHMATES</li></Link>
            
            <Link to='/donation' style={{textDecoration: 'none'}}><li>DONATION</li></Link>
            <Link to='/login' style={{textDecoration: 'none'}}><li>LOGIN</li></Link>
            </ul>
    </div>

    {display?<div className="nav1">
        <ul>
        <Link to='/' style={{textDecoration: 'none'}}><li>HOME</li></Link>
            <Link to='/event' style={{textDecoration: 'none'}}><li>EVENTS</li></Link>
            <Link to='/news' style={{textDecoration: 'none'}}><li>NEWS</li></Link>
            <Link to='/batchmates' style={{textDecoration: 'none'}}><li>BATCHMATES</li></Link>
            
            <Link to='/donation' style={{textDecoration: 'none'}}><li>DONATION</li></Link>
            <Link to='/login' style={{textDecoration: 'none'}}><li>LOGIN</li></Link>
            </ul>
    </div>:<div></div>}
  
  
   </div>

  )
};
export default Alumni;
