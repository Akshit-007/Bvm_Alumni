import React from 'react'
import { Link } from 'react-router-dom'
import image2 from './images.jpg'
import pi1 from './p1.jpg'
import pi2 from './p2.jpg'
import pi3 from './p3.jpg'
import image8 from './event1.jpg'
import image7 from './event3.jpg'
import './pevent.css'

function Pevent() {
  return (
    <div>
 


      <div className="evnc">
        <div className="evn1">
          <div className="fcard">
            <div className="finner">
              <div className="ffront">
                <img src={image8} alt="Avatar" height="200px" width="240px" />
              </div>
              <div className="fback">
                <h1>Event Name</h1>
                <p>	<i className='far fa-calendar-alt'></i> 11/01/2022  </p>
                <p>    <i className='far fa-clock'></i> 9:00 AM  </p>
                <Link to={process.env.PUBLIC_URL + '/event'} style={{ textDecoration: 'none' }}><button className="wevn">Know More</button></Link>
              </div>
            </div>
          </div>

        </div>
        <div className="evn2">

          <div className="fcard">
            <div className="finner">
              <div className="ffront">
                <img src={image7} alt="Avatar" height="200px" width="240px" />
              </div>
              <div className="fback">
                <h1>Event Name</h1>
                <p>	<i className='far fa-calendar-alt'></i> 11/01/2022  </p>
                <p><i className='far fa-clock'></i> 9:00 AM  </p>
                <Link to={process.env.PUBLIC_URL + '/event'} style={{ textDecoration: 'none' }}><button className="wevn">Know More</button></Link>
              </div>
            </div>
          </div>

        </div>
        <div className="evn3">

          <div className="fcard">
            <div className="finner">
              <div className="ffront">
                <img src={image8} alt="Avatar" height="200px" width="240px" />
              </div>
              <div className="fback">
                <h1>Event Name</h1>
                <p>	<i className='far fa-calendar-alt'></i> 11/01/2022  </p>
                <p><i className='far fa-clock'></i> 9:00 AM  </p>
                <Link to={process.env.PUBLIC_URL + '/event'} style={{ textDecoration: 'none' }}><button className="wevn">Know More</button></Link>
              </div>
            </div>
          </div>

        </div>
        <div className="evn4">

          <div className="fcard">
            <div className="finner">
              <div className="ffront">
                <img src={pi3} alt="Avatar" height="200px" width="240px" />
              </div>
              <div className="fback">
                <h1>Event Name</h1>
                <p>	<i className='far fa-calendar-alt'></i> 11/01/2022  </p>
                <p><i className='far fa-clock'></i> 9:00 AM  </p>
                <Link to={process.env.PUBLIC_URL + '/event'} style={{ textDecoration: 'none' }}><button className="wevn">Know More</button></Link>
              </div>
            </div>
          </div>

        </div>
        <div className="evn5">

          <div className="fcard">
            <div className="finner">
              <div className="ffront">
                <img src={pi2} alt="Avatar" height="200px" width="240px" />
              </div>
              <div className="fback">
                <h1>Event Name</h1>
                <p>	<i className='far fa-calendar-alt'></i> 11/01/2022  </p>
                <p><i className='far fa-clock'></i> 9:00 AM  </p>
                <Link to={process.env.PUBLIC_URL + '/event'} style={{ textDecoration: 'none' }}><button className="wevn">Know More</button></Link>
              </div>
            </div>
          </div>

        </div>
        <div className="evn6">

          <div className="fcard">
            <div className="finner">
              <div className="ffront">
                <img src={pi1} alt="Avatar" height="200px" width="240px" />
              </div>
              <div className="fback">
                <h1>Event Name</h1>
                <p>	<i className='far fa-calendar-alt'></i> 11/01/2022  </p>
                <p><i className='far fa-clock'></i> 9:00 AM  </p>
                <Link to={process.env.PUBLIC_URL + '/event'} style={{ textDecoration: 'none' }}><button className="wevn">Know More</button></Link>
              </div>
            </div>
          </div>

        </div>
        <div className="evn7">
          <div className="fcard">
            <div className="finner">
              <div className="ffront">
                <img src={image8} alt="Avatar" height="200px" width="240px" />
              </div>
              <div className="fback">
                <h1>Event Name</h1>
                <p>	<i className='far fa-calendar-alt'></i> 11/01/2022  </p>
                <p><i className='far fa-clock'></i> 9:00 AM  </p>
                <Link to={process.env.PUBLIC_URL + '/event'} style={{ textDecoration: 'none' }}><button className="wevn">Know More</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="evn8">
          <div className="fcard">
            <div className="finner">
              <div className="ffront">
                <img src={image2} alt="Avatar" height="200px" width="240px" />
              </div>
              <div className="fback">
                <h1>Event Name</h1>
                <p>	<i className='far fa-calendar-alt'></i> 11/01/2022  </p>
                <p><i className='far fa-clock'></i> 9:00 AM  </p>
                <Link to={process.env.PUBLIC_URL + '/event'} style={{ textDecoration: 'none' }}><button classNameName="wevn">Know More</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
export default Pevent;


{/* <Link to='/event' style={{textDecoration: 'none'}}><button  classNameNameName="wevn">Registration Closed</button></Link> */ }




