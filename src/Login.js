import React from 'react'
import './login.css'
import image4 from './login-logo.jpg'

function Login() 
{
return (
<div class="container px-4 py-5 mx-auto">
    <div class="card card0">
        <div class="d-flex flex-lg-row flex-column-reverse">
            <div class="card card1">
                <div class="row justify-content-center my-auto">
                    <div class="col-md-8 col-10 my-5">
                        <div class="row justify-content-center px-3 mb-3 py-2">
                                    <img id="logo" src={image4} />
                                </div>
                        <form id="libraryform">
                            <div class="form-group">
                                <label class="form-control-label text-muted che5">Username</label> 
                                <input type="text" id="email" name="email" placeholder="enter email id" class="form-control che4" />
                            </div>
                            <div class="form-group">
                                <label class="form-control-label text-muted che5">Password</label>
                                <input type="password" id="psw" name="psw" placeholder="Password" class="form-control" />
                            </div>
                            <p class="che1 che2">select any from below  : :</p>
                            <label for="male" class="che1 che3">mentor</label>
                            <input type="radio" name="gender" id="male" value="male" />
                            <label for="female" class="che1 che3">mentees</label>
                            <input type="radio" name="gender" id="female" value="female" />

                            <div class="row justify-content-center px-2"> <button class="btn-block btn-color">Login</button> </div>
                        </form>
                            <div class="row justify-content-center my-2">
                            <a href="#"><small class="text-muted ">Forgot Password?</small></a>
                        </div>
                            <p class="my-4">Login With ...</p>
                            <div class="link my-2">
                                <div class="links">
                                    <a href="https://www.facebook.com/BVMEngineeringCollege/" target="_blank"><i class="fab fa-facebook fa-3x text-light"></i></a>
                                    <a href="https://twitter.com/bvmtpc?lang=en" target="_blank"><i class="fab fa-twitter fa-3x text-light"></i></a>
                                    <a href="https://www.instagram.com/bvmtpc/?hl=en" target="_blank"><i class="fab fa-instagram fa-3x text-light"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card2">
                <div class="my-auto mx-md-5 px-md-2 right">
                        <h3>Once Bvmites Always Bvmites</h3>
                        <small class="text-green my-5 ">Birla Vishvakarma Mahavidyalaya Engineering College was established in <mark>1948</mark> from donations made by the Birla Education Trust on the behest of <mark>Sardar Vallabhbhai Patel</mark>, the first Home Minister of independent India. The college was inaugurated by Lord Mountbatten, the Governor General of India on 14 June 1948, and rose to prominence under the stewardship of Prof. Junarkar and Prof. K.M. Dholakia. It was one of the first few colleges in India that adopted the progressive credit system of relative grading in India. The college has awarded degrees to over <mark>17,000 graduates</mark>, and has its alumni spread across the globe
                        </small>
                        <h3 class="my-5"><small>-Created By Engineer For Engineer</small></h3>
                </div>
            </div>
        </div>
    </div>
</div>
);
}
export default Login;