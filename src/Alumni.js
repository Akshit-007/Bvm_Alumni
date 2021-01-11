import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import './index.css'
// import Mentor from './News'




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
   <div className="ind">
    <div className="head ">
    <div className="img"></div>
    <Link to={process.env.PUBLIC_URL+'/'}  style={{textDecoration: 'none' , color:'black'}}><div className="name">BVM,<br/> ALUMNI ASSOCIATION</div></Link>
    <div className="contact">
        &nbsp; <a href="https://www.facebook.com/BVMEngineeringCollege/" target="_blank"><i className="fa fa-facebook-square" ></i></a>
        &nbsp; <a href="https://www.linkedin.com/in/bvmcollege/?originalSubdomain=in" target="_blank"><i className="fa fa-linkedin-square" ></i></a>
        &nbsp;  <a href="https://www.instagram.com/bvmtpc/?hl=en" target="_blank"><i className="fa fa-instagram" ></i></a>
        &nbsp;  <a href="https://twitter.com/bvmtpc?lang=en" target="_blank"><i className="fa fa-twitter-square" ></i></a>
        &nbsp;  <a href="https://www.youtube.com/watch?v=hqFIUhV8iA0" target="_blank"><i className="fa fa-youtube-square" ></i></a>
        </div>
        <div className="search"><input className="intx" type="text" placeholder="search" ></input> &nbsp;<button className="srch"><i className="fa fa-search"></i></button> &nbsp;{display?<i className="fa fa-close"  onClick={()=>{show()}}></i>:<i className="fa fa-server"  onClick={()=>{show()}}></i>}</div>
    </div>
    <div className="nav">
        <ul>
             <Link to={process.env.PUBLIC_URL+'/'} style={{textDecoration: 'none'}}><li >HOME</li></Link>
            <Link to={process.env.PUBLIC_URL+'/event'} style={{textDecoration: 'none'}}><li>EVENTS</li></Link>
            <Link to={process.env.PUBLIC_URL+'/mentor'} style={{textDecoration: 'none'}}><li>MENTOR</li></Link>
            <Link to={process.env.PUBLIC_URL+'/batchmates'} style={{textDecoration: 'none'}}><li>BATCHMATES</li></Link>
            
            <Link to={process.env.PUBLIC_URL+'/donation'} style={{textDecoration: 'none'}}><li>DONATION</li></Link>
            <Link to={process.env.PUBLIC_URL+'/login'} style={{textDecoration: 'none'}}><li>LOGIN</li></Link>
            </ul>
    </div>

    {display?<div className="nav1">
        <ul>
        <Link to={process.env.PUBLIC_URL+'/'} style={{textDecoration: 'none'}}><li >HOME</li></Link>
            <Link to={process.env.PUBLIC_URL+'/event'} style={{textDecoration: 'none'}}><li>EVENTS</li></Link>
            <Link to={process.env.PUBLIC_URL+'/mentor'} style={{textDecoration: 'none'}}><li>MENTOR</li></Link>
            <Link to={process.env.PUBLIC_URL+'/batchmates'} style={{textDecoration: 'none'}}><li>BATCHMATES</li></Link>
            
            <Link to={process.env.PUBLIC_URL+'/donation'} style={{textDecoration: 'none'}}><li>DONATION</li></Link>
            <Link to={process.env.PUBLIC_URL+'/login'} style={{textDecoration: 'none'}}><li>LOGIN</li></Link>
            </ul>
    </div>:<div></div>}
   
  
 

  
  
 
  
   </div>

  )
};
export default Alumni;
