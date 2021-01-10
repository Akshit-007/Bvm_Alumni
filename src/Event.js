import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image2 from './images.jpg'
import Uevent from './Uevent'
import Pevent from './Pevents'
import './event.css'
import './uevent.css'
import './pevent.css'



function Event()
{

    const [event,setevent]=useState(1);
    
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
             <div className="ev1 ev"  onClick={()=>{(setevent(1))}}>Upcoming</div>
             <div className="ev2 ev"  onClick={()=>{(setevent(2))}}>Past</div>
             <div className="ev3 ev"  onClick={()=>{(setevent(3))}}>All</div>
            </div>
             {text}
             
        
           

        </div>
    );
}
export default Event;
