import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image2 from './images.jpg'
import Uevent from './Uevent'
import Pevent from './Pevents'
import './event.css'
import './uevent.css'
import './pevent.css'
import $ from 'jquery'



function Event()
{

    const [event,setevent]=useState(2);
    
    var text;
  
    if(event==1)
    {
        
       
          text=<Uevent />;
        
    }
    else if(event==2)
    {
        text=<Pevent />;
   

    }
    else{
        text=<Pevent />;
       

    }
    return(
        <div>
         
           <div className="ehead">
           
             <div className="ev1 ev"  onClick={()=>{$(".ev1").addClass('permahover');$(".ev2").removeClass('permahover');$(".ev3").removeClass('permahover');(setevent(1))}}>Upcoming</div>
             <div className="ev2 ev"  onClick={()=>{$(".ev1").removeClass('permahover');$(".ev2").addClass('permahover');$(".ev3").removeClass('permahover');(setevent(2))}}>Past</div>
             <div className="ev3 ev"  onClick={()=>{$(".ev1").removeClass('permahover');$(".ev2").removeClass('permahover');$(".ev3").addClass('permahover');(setevent(3))}}>All</div>
            </div>
             {text}
             
        
           

        </div>
    );
}
export default Event;
