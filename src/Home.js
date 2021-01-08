import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from './bg.jpg'
import image2 from './images.jpg'
import image3 from './boys.webp'
import image5 from './mimg.jpg'
import './index.css'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import "aos/dist/aos.css"



function Home()
{

useEffect(()=>{
  AOS.init({
    duration:1000
  });
  AOS.refresh();
},[])
    return(
        <div>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
      width="100vw"
      height="600px"
    />
    <Carousel.Caption>
    <Link to='/login' style={{textDecoration: 'none'}}><button className="member">BE A  MEMBER ?</button></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
      width="100vw"
      height="600px"
    />

    <Carousel.Caption>
    <Link to='/login' style={{textDecoration: 'none'}}><button className="member">BE A  MEMBER ?</button></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
      width="100vw"
      height="600px"
    />

    <Carousel.Caption>
    <Link to='/login' style={{textDecoration: 'none'}}><button className="member">BE A  MEMBER ?</button></Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


    <div className="newsline">
  <marquee>
    <ul>
      <div className="title">
      <Link to='/motivationa' style={{textDecoration: 'none'}}><li>Rise of a novelist in the league of BVMites </li></Link>
    <Link to='/motivationb' style={{textDecoration: 'none'}}><li>Change your thoughts and you change your world</li></Link>
    <Link to='/motivationc' style={{textDecoration: 'none'}}><li>Believe you can and you’re halfway there.</li></Link>
      </div>
    </ul>
    </marquee>
</div>

<h1 className="visit" data-aos="slide-up">Blogs</h1>


    <div class="card-container">
        <div class="cards">
          <header class="article-header">
            <h2 class="article-title">Inside Higher Education</h2>
          </header>
            <p class="p1">This is a great source of content for anyone in higher education, including those looking for jobs. They have sections including Admissions, Books, Technology, Career Advice, and Diversity. They also offer a number of webinars and research in the higher ed space. 
            </p>
        </div>
        <div class="cards">
          <header class="article-header">
            <h2 class="article-title">The Learning Network </h2>
          </header>
            <p class="p1">This blog is under the New York Times umbrella. Their main audiences are teachers, students, and parents that want to use the NYTs content as inspiration for teaching materials. Teachers can use the section "Text to text" as lesson plans in areas such as American History, Civics, Current Events, and Social Studies.
            </p>
        </div>
        <div class="cards">
          <header class="article-header">
            <h2 class="article-title">Classroom 2.0</h2>
          </header>
          
            <p class="p1">This blog is focused on bringing social media and web 2.0 into the classroom. It's not just a destination for content, but also acts as a social network for educators that are looking to learn more about integrating online strategies into their classrooms.They have groups at different schools that you can join. 
            </p>
          
        </div>
        <div class="cards">
          <header class="article-header">
            <h2 class="article-title">TeacherTube</h2>
          </header>
          
            <p class="p1">This is an online community for teachers to share videos of instructional learning. For teachers in any school or even home teachers, this is a destination to learn from your peers. You can also find photos, videos, and audio recordings to use in your curriculum. You can also join different groups focused on specific topics.
            </p>
          
        </div>
        <div class="cards">
          <header class="article-header">
            <h2 class="article-title"> TechThought</h2>
          </header>
            <p class="p1">This progressive blog is for all educators who are looking to be more digitally connected. They have great sections on testing with technology, best practices for iPads in the classroom, what hashtags to follow on Twitter, and research around how thinking habits and neuroscience impact students' learning processes.
            </p>
        </div>
        <div class="cards">
          <header class="article-header">
            <h2 class="article-title">Homeroom</h2>
          </header>
          <p class="p1">This blog is all about technology in the education space. They provide tactful advice about incorporating technology in the classroom, including a teacher's guide to technology and learning as well as product reviews on the best laptops, tablets, and apps for teachers. They also provide best practices for online learning.
          </p>
        </div>
      </div>

    <h1 className="visit" data-aos="slide-left">Events</h1>
    <div className="evntcard">
        <div className="event1">

         <div class="flip-card">
         <div class="flip-card-inner">
         <div class="flip-card-front">
         <img src={image2} alt="Avatar" />
         </div>
         <div class="flip-card-back">
         <h1>Event Name</h1>
         <p>	<i class='far fa-calendar-alt'></i> 11/01/2022  </p>
         <p>    <i class='far fa-clock'></i> 9:00 AM  </p>
         <Link to='/event' style={{textDecoration: 'none'}}><button  className="wevnt">Know More</button></Link>
       </div>
       </div>
      </div>

        </div>
        <div className="event2">

        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={image2} alt="Avatar" />
    </div>
    <div class="flip-card-back">
      <h1>Event Name</h1>
      <p>	<i class='far fa-calendar-alt'></i> 11/01/2022  </p>
      <p><i class='far fa-clock'></i> 9:00 AM  </p>
      <Link to='/event' style={{textDecoration: 'none'}}><button  className="wevnt">Know More</button></Link>
    </div>
  </div>
</div>

        </div>
        <div className="event3">

        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={image2} alt="Avatar"  />
    </div>
    <div class="flip-card-back">
      <h1>Event Name</h1>
      <p>	<i class='far fa-calendar-alt'></i> 11/01/2022  </p>
      <p> <i class='far fa-clock'></i> 9:00 AM  </p>
      <Link to='/event' style={{textDecoration: 'none'}}><button  className="wevnt">Know More</button></Link>
    </div>
  </div>
</div>
        </div>
        <div className="event4"> <Link to='/event' style={{textDecoration: 'none'}}><button  className="wevnt">More Events</button></Link></div>
    </div>
    


<div className="gap"></div>
<h1 className="visit">Visit Us</h1>

<div className="map">
<div className="mapimg"></div>
<div class="map-responsive">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7105367330237!2d72.9216363147916!3d22.55251358519319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e74c03b7749%3A0xab364c66fd4834c!2sBirla%20Vishvakarma%20Mahavidyalaya%20(BVM)!5e0!3m2!1sen!2sin!4v1609953923224!5m2!1sen!2sin" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>
</div>

<div class="container-fluid justify-content-center">
      <footer>
         <div class="row  justify-content-center py-3">
             <div class="col-11">
                 <div class="row ">
                     <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a3">
                         <h3 class="text-muted mb-md-0 mb-5 bold-text">BVM,</h3>
                         <h3 class="text-muted mb-md-0 mb-5 bold-text">ALUMNI ASSOCIATION</h3>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-12 a2 ">
                         <h6 class="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                         <ul class="list-unstyled">
                             <li>Home</li>
                             <li>About</li>
                             <li>Event</li>
                             <li>News</li>                             
                         </ul>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-12 a4">
                         <h6 class="mb-3 mb-lg-4 bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                         <p class="mb-1">BVM Engineering College,</p>
                         <p> Vallabh Vidyanagar - 388 120. GUJARAT, INDIA.</p>
                     </div>
                 </div>
                 <div class="row row1">
                 <div class="col-xl-2 col-md-2 col-sm-2 col-auto order-1 a1">
                          <h6 class="mt-55 mt-2 text-muted bold-text"><b>AKSHIT TRIVEDI</b></h6>
                          <small> <span><i class="fa fa-envelope a1" aria-hidden="true"></i></span>
                            akshittrivedi495@gmail.com
                          </small>
                     </div>
                 <div class="col-xl-2 col-md-2 col-sm-2 col-auto order-2 a1">
                         <h6 class="mt-55 mt-2 text-muted bold-text"><b>SAHIL DABHI</b></h6>
                         <small><span><i class="fa fa-envelope a1" aria-hidden="true"></i></span>
                                sahildabhi0101@gmail.com
                         </small>
                     </div>
                 <div class="col-xl-2 col-md-2 col-sm-2 col-auto order-3 a1">
                         <h6 class="mt-55 mt-2 text-muted bold-text"><b>RAHUL SANNIGRAHI</b></h6>
                         <small><span><i class="fa fa-envelope a1" aria-hidden="true"></i></span>
                                rahulsannigrahy@gmail.com
                         </small>
                     </div>
                 <div class="col-xl-6 col-md-2 col-sm-2 foo my-3 order-4">
                        <p class="social text-muted mb-0 pb-0 bold-text"> 
                        <div class="a5">
                        <span class="mx-2"><i class="fa fa-facebook-square" aria-hidden="true"></i></span>
                        <span class="mx-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span>
                        <span class="mx-2"><i class="fa fa-instagram" aria-hidden="true"></i></span>
                        <span class="mx-2"><i class="fa fa-twitter-square" aria-hidden="true"></i></span>
                        <span class="mx-2"><i class="fa fa-youtube-square" aria-hidden="true"></i></span>
                        </div>
                        </p>
                        
                        <div class="rights a6">2021 &#174; Alumni , All Rights Reserved.</div>
                  </div>
                 </div>
             </div>
         </div>
     </footer>
 </div>


</div>
    );
}
export default Home;