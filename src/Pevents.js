import React from 'react'
import { Link } from 'react-router-dom'
import image2 from './images.jpg'
import pi1 from './p1.jpg'
import pi2 from './p2.jpg'
import pi3 from './p3.jpg'
import image8 from './event1.jpg'
import image7 from './event3.jpg'

function Pevent()
{
    return(
        <div>


            
             <div className="ecard">
 <div className="et1">

<div class="flip-card">
<div class="flip-card-inner">
<div class="flip-card-front">
<img src={image2} alt="Avatar" height="200px" width="240px"/>
</div>
<div class="flip-card-back">
<h1>Event Name</h1>
<p>	<i class='far fa-calendar-alt'></i> 11/01/2022  </p>
<p><i class='far fa-clock'></i> 9:00 AM  </p>
<Link to='/event' style={{textDecoration: 'none'}}><button  className="wevnt" >Registration Closed</button></Link>
</div>
</div>
</div>

</div>
<div className="et2">

         <div class="flip-card">
         <div class="flip-card-inner">
         <div class="flip-card-front">
         <img src={image8} alt="Avatar" height="200px" width="240px"/>
         </div>
         <div class="flip-card-back">
         <h1>Event Name</h1>
         <p>	<i class='far fa-calendar-alt'></i> 11/01/2022  </p>
         <p>    <i class='far fa-clock'></i> 9:00 AM  </p>
         <Link to='/event' style={{textDecoration: 'none'}}><button  className="wevnt">Registration Closed</button></Link>
       </div>
       </div>
      </div>

        </div>
<div className="et3">

        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={image7} alt="Avatar" height="200px" width="240px"/>
    </div>
    <div class="flip-card-back">
      <h1>Event Name</h1>
      <p>	<i class='far fa-calendar-alt'></i> 11/01/2022  </p>
      <p><i class='far fa-clock'></i> 9:00 AM  </p>
      <Link to='/event' style={{textDecoration: 'none'}}><button  className="wevnt">Registration Closed</button></Link>
    </div>
  </div>
</div>

        </div>        
<div className="et4">

<div class="flip-card">
<div class="flip-card-inner">
<div class="flip-card-front">
<img src={pi1} alt="Avatar"  height="200px" width="240px"/>
</div>
<div class="flip-card-back">
<h1>Event Name</h1>
<p>	<i class='far fa-calendar-alt'></i> 11/01/2022  </p>
<p> <i class='far fa-clock'></i> 9:00 AM  </p>
<Link to='/event' style={{textDecoration: 'none'}}><button  className="wevnt">Registration Closed</button></Link>
</div>
</div>
</div>
</div>
<div className="et5">

<div class="flip-card">
<div class="flip-card-inner">
<div class="flip-card-front">
<img src={pi2} alt="Avatar" height="200px" width="240px"/>
</div>
<div class="flip-card-back">
<h1>Event Name</h1>
<p>	<i class='far fa-calendar-alt'></i> 11/01/2022  </p>
<p><i class='far fa-clock'></i> 9:00 AM  </p>
<Link to='/event' style={{textDecoration: 'none'}}><button  className="wevnt">Registration Closed</button></Link>
</div>
</div>
</div>

</div>
<div className="et6">

<div class="flip-card">
<div class="flip-card-inner">
<div class="flip-card-front">
<img src={pi3} alt="Avatar" height="200px" width="240px"/>
</div>
<div class="flip-card-back">
<h1>Event Name</h1>
<p>	<i class='far fa-calendar-alt'></i> 11/01/2022  </p>
<p><i class='far fa-clock'></i> 9:00 AM  </p>
<Link to='/event' style={{textDecoration: 'none'}}><button  className="wevnt">Registration Closed</button></Link>
</div>
</div>
</div>

</div>
<div className="et7">

<div class="flip-card">
<div class="flip-card-inner">
<div class="flip-card-front">
<img src={image2} alt="Avatar" height="200px" width="240px"/>
</div>
<div class="flip-card-back">
<h1>Event Name</h1>
<p>	<i class='far fa-calendar-alt'></i> 11/01/2022  </p>
<p><i class='far fa-clock'></i> 9:00 AM  </p>
<Link to='/event' style={{textDecoration: 'none'}}><button  className="wevnt">Registration Closed</button></Link>
</div>
</div>
</div>

</div>
<div className="et8">

<div class="flip-card">
<div class="flip-card-inner">
<div class="flip-card-front">
<img src={image2} alt="Avatar" height="200px" width="240px"/>
</div>
<div class="flip-card-back">
<h1>Event Name</h1>
<p>	<i class='far fa-calendar-alt'></i> 11/01/2022  </p>
<p><i class='far fa-clock'></i> 9:00 AM  </p>
<Link to='/event' style={{textDecoration: 'none'}}><button  className="wevnt">Registration Closed</button></Link>
</div>
</div>
</div>

</div>
        
    </div>
    

        </div>
    );
}
export default Pevent;
 
 
 
 
 
 
