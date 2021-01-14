import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from './bg.jpg'
import image2 from './head.jpg'
import image8 from './event1.jpg'
import image7 from './event3.jpg'
import image3 from './boys.webp'
import './index.css'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import "aos/dist/aos.css"
import './pcorner.css'
import image6 from './ip.jpg'



function Home()
{

useEffect(()=>{
  AOS.init({
    duration:1500
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
    <Link to={process.env.PUBLIC_URL+'/login'} style={{textDecoration: 'none'}}><button className="member">BE A  MEMBER ?</button></Link>
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
    <Link to={process.env.PUBLIC_URL+'/login'} style={{textDecoration: 'none'}}><button className="member">BE A  MEMBER ?</button></Link>
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
    <Link to={process.env.PUBLIC_URL+'/login'} style={{textDecoration: 'none'}}><button className="member">BE A  MEMBER ?</button></Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


    <div className="newsline">
  <marquee>
    <ul>
      <div className="title">
      <Link to='/motivationa' style={{textDecoration: 'none'}}><li>Rise of a novelist in the league of BVMites </li></Link>
     < Link to='/motivationb' style={{textDecoration: 'none'}}><li>Change your thoughts and you change your world</li></Link>
      <Link to='/motivationc' style={{textDecoration: 'none'}}><li>Believe you can and you’re halfway there.</li></Link>
      </div>
    </ul>
    </marquee>
</div>

<h1 className="visit" data-aos="zoom-in">Blogs</h1>


    <div class="card-container" data-aos="flip-down">
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

    <h1 className="visit" data-aos="zoom-in">Events</h1>
    <div className="evntcard">
        <div className="event1">
         <div class="flcard">
         <div class="flinner">
         <div class="flfront">
         <img src={image2} alt="Avatar" height="200px" width="240px"/>
         </div>
         <div class="flback">
         <h1>Event Name</h1>
         <p>	<i class='far fa-calendar-alt'></i> 11/01/2022  </p>
         <p>    <i class='far fa-clock'></i> 9:00 AM  </p>
         <Link to={process.env.PUBLIC_URL+'/event'} style={{textDecoration: 'none'}}><button  className="wevnt">Know More</button></Link>
       </div>
       </div>
      </div>

        </div>
        <div className="event2">

        <div class="flcard">
  <div class="flinner">
    <div class="flfront">
      <img src={image8} alt="Avatar" height="200px" width="240px"/>
    </div>
    <div class="flback">
      <h1>Event Name</h1>
      <p>	<i class='far fa-calendar-alt'></i> 11/01/2022  </p>
      <p><i class='far fa-clock'></i> 9:00 AM  </p>
      <Link to={process.env.PUBLIC_URL+'/event'} style={{textDecoration: 'none'}}><button  className="wevnt">Know More</button></Link>
    </div>
  </div>
</div>

        </div>
        <div className="event3">

        <div class="flcard">
  <div class="flinner">
    <div class="flfront">
      <img src={image7} alt="Avatar" height="200px" width="240px" />
    </div>
    <div class="flback">
      <h1>Event Name</h1>
      <p>	<i class='far fa-calendar-alt'></i> 11/01/2022  </p>
      <p> <i class='far fa-clock'></i> 9:00 AM  </p>
      <Link to={process.env.PUBLIC_URL+'/event'} style={{textDecoration: 'none'}}><button  className="wevnt">Know More</button></Link>
    </div>
  </div>
</div>
        </div>
        <div className="event4"> <Link to={process.env.PUBLIC_URL+'/event'} style={{textDecoration: 'none'}}><button  className="wevnt">More Events</button></Link></div>
    </div>
<div className="pmessage">
<div class="p-message">
        <p class="p3" data-aos="flip-up">Valuable Words of PRINCIPAL</p>
        <div class="p10">
          <div class="p101">
            <img src={image6} alt="principal-image"   class="p5" />
            <div class="p1011">
              <br />Dear All,<br/>Birla Vishvakarma Mahavidyalaya Engineering College (BVM), an institution of Charutar Vidya Mandal, is the<span class="p4">first engineering college of state(Since 1948) as well as first autonomous college of state(since 2015)</span> established in 1948 by inspiration and motivation of Iron man of India Shri Sardar Patel and generous  contribution from <span class="p4">Shri Ghanshyamdasji Birla</span> which is committed to emerge and disseminate word class unique  learning experience through research based education and innovation across sphere.  <br /><br />
              This premier technical  institution has nurtured 20,000+ engineers and continuously evolved with the facilities like best  infrastructure, state of art Laboratories upgraded with instruments and utility software packages, enriched  library, central computing and net station, canteen, play field, gymnasium, medical facilities, hostel and  residence quarters.
            </div>
          </div>
          <div class="p102">
            <br /><br /><span class="p4">I am proud to say BVM is awarded with Best
            overall performing Engineering College 2018-19 and among top 300 by NIRF 2020.</span> <br />Meritorious students of  Gujarat (Upto rank 2000) take the admission in BVM. It is one of the leading institutions across Gujarat  which is renowned for its excellent placement record. 100+corporates visit the college for conducting Campus  Interviews and <span class="p4">more than 90% eligible students are placed through campus drive every year </span> of various department is contributing through R& D projects under  different state level and international level funding Agencies.Faculties are also providing traditional
            consultancy in various sectors and firms.  <br /><br /> 
            <div class="p1013">To make our engineers “INDUSTRY READY” according to the benchmark  of Industry 4.0, Institute has established Industry institute interaction programme under which 200 faculty - 200 industries are collaborated to provide the industrial platform to the students and faculties. Number  of MOUs are done between top industries at National/International level through which industry experts are
            giving their guidance and expertise for events like Project expo, expert talks, seminars, workshops,  industry tour etc.</div><br />
            
            <br/>My Best Wishes to all of you!!!!!
            <br /><br /> (Dr.) Indrajit Patel,
            <br />Principal,
            <br />BVM engineering college.
          </div>
        </div>
      </div>
</div>
<h1 className="visit" data-aos="flip-down">Visit Us</h1>

<div className="map">
<div className="mapimg" data-aos="fade-down"></div>
<div class="map-responsive" data-aos="fade-up">
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
                         <Link to={process.env.PUBLIC_URL+'/'} style={{textDecoration: 'none'}}><li >HOME</li></Link>
                         <Link to={process.env.PUBLIC_URL+'/evebt'} style={{textDecoration: 'none'}}><li >EVENT</li></Link>
                         <Link to={process.env.PUBLIC_URL+'/'} style={{textDecoration: 'none'}}><li >NEWS</li></Link>
                         <Link to={process.env.PUBLIC_URL+'/'} style={{textDecoration: 'none'}}><li >BATCHMATES</li></Link>                           
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
                          <h6 class="mt-55 mt-2 bold-text"><b>AKSHIT TRIVEDI</b></h6>
                          <small> <span><i class="fa fa-envelope a1" aria-hidden="true"></i></span>
                            akshittrivedi495@gmail.com
                          </small>
                     </div>
                 <div class="col-xl-2 col-md-2 col-sm-2 col-auto order-2 a1">
                         <h6 class="mt-55 mt-2 bold-text"><b>SAHIL DABHI</b></h6>
                         <small><span><i class="fa fa-envelope a1" aria-hidden="true"></i></span>
                                sahildabhi0101@gmail.com
                         </small>
                     </div>
                 <div class="col-xl-2 col-md-2 col-sm-2 col-auto order-3 a1">
                         <h6 class="mt-55 mt-2 bold-text"><b>RAHUL SANNIGRAHI</b></h6>
                         <small><span><i class="fa fa-envelope a1" aria-hidden="true"></i></span>
                                rahulsannigrahy@gmail.com
                         </small>
                     </div>
                 <div class="col-xl-6 col-md-2 col-sm-2 foo my-3 order-4">
                        <p class="social text-muted mb-0 pb-0 bold-text"> 
                        <div class="a5">
                        <span class="mx-2"><a href="https://www.facebook.com/BVMEngineeringCollege/" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></span>
                        <span class="mx-2"><a href="https://www.linkedin.com/in/bvmcollege/?originalSubdomain=in" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></span>
                        <span class="mx-2"><a href="https://www.instagram.com/bvmtpc/?hl=en" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></span>
                        <span class="mx-2"><a href="https://twitter.com/bvmtpc?lang=en" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></span>
                        <span class="mx-2"><a href="https://www.youtube.com/watch?v=hqFIUhV8iA0" target="_blank"><i class="fa fa-youtube-square" aria-hidden="true"></i></a></span>
                        </div>
                        </p>
                        
                        <div class="rights a6"> &#169;2021 bvm Alumni , All Rights Reserved.</div>
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