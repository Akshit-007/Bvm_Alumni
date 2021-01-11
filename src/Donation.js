import React from 'react'
import './don.css'

function Donation() {
    return (
        <div>
            
            <div class="container containermg">
                <div class="row">
                    <div class="col-xs-12 col-md-12">
                        <div class="panel panel-default">
                            <div class="panel-heading mg">
                                <h3 class="panel-title">Personal Information</h3>
                            </div>
                            <div class="panel-body pim">

                                <div class="bodyTest">
                                    <form class="">

                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="firstname" class="control-label sg">First Name</label>
                                                    <div class="">
                                                        <input id="first-name" name="firstname" type="text" autocomplete="first-name" placeholder="first name" class="form-control" />
                                                        <p class="help-block"></p>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="lastname" class="control-label sg">Last Name</label>
                                                    <div class="">
                                                        <input id="last-name" name="lastname" type="text" autocomplete="last-name" placeholder="last name" class="form-control" />
                                                        <p class="help-block "></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="control-group">
                                                    <label for="company" class="control-label sg">College / Organization</label>
                                                    <div class="">
                                                        <input id="company" name="company" type="text" autocomplete="organization" placeholder="college / organization" class="form-control" />
                                                        <p class="help-block"></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="row">

                                            <div class="col-sm-6">
                                                <div class="control-group">
                                                    <label class="control-label sg">Address</label>
                                                    <div class="">
                                                        <input id="city" name="city" type="text" autocomplete="address-level2" placeholder="address" class="form-control" />
                                                        <p class="help-block"></p>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-sm-6">

                                                <div class="control-group">
                                                    <label class="control-label sg">State</label>
                                                    <div class="">
                                                        <input id="region" name="region" type="text" autocomplete="address-level1" placeholder="state / region" class="form-control" />
                                                        <p class="help-block"></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="control-group">
                                                    <label class="control-label sg">Postal Code</label>
                                                    <div class="">
                                                        <input id="postal-code" name="postal-code" type="text" autocomplete="postal-code" placeholder="postal code" class="form-control" />
                                                        <p class="help-block"></p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <div class="control-group">
                                                    <label class="control-label c sg">Country</label>
                                                    <div class="">
                                                        <select id="country" name="country" autocomplete="country" class="form-control">
                                                            <option value="" selected="selected">(please select a country)  &#x25BC;</option>
                                                            <option value="AF">Afghanistan</option>
                                                            <option value="AQ">Antarctica</option>
                                                            
                                                            <option value="AR">Argentina</option>
                                                           
                                                            <option value="AU">Australia</option>
                                                            <option value="AT">Austria</option>
                                                            
                                                            <option value="BS">Bahamas</option>
                                                            
                                                            <option value="BD">Bangladesh</option>
                                                            
                                                            <option value="BY">Belarus</option>
                                                            <option value="BE">Belgium</option>
                                                            
                                                            <option value="BM">Bermuda</option>
                                                            <option value="BT">Bhutan</option>
                                                           
                                                            <option value="BW">Botswana</option>
                                                            
                                                            <option value="BR">Brazil</option>
                                                            <option value="IO">British Indian Ocean Territory</option>
                                                            
                                                            <option value="BG">Bulgaria</option>
                                                            
                                                            
                                                            <option value="KH">Cambodia</option>
                                                            <option value="CM">Cameroon</option>
                                                            <option value="CA">Canada</option>
                                                            
                                                            <option value="CF">Central African Republic</option>
                                                            
                                                            <option value="CN">China</option>
                                                            <option value="CX">Christmas Island</option>

                                                            <option value="CO">Colombia</option>
                                                           
                                                            <option value="CR">Costa Rica</option>
                                                            
                                                            <option value="CU">Cuba</option>
                                                           
                                                            <option value="DK">Denmark</option>
                                                            
                                                            
                                                            <option value="EG">Egypt</option>
                                                            
                                                            
                                                            <option value="EE">Estonia</option>
                                                            <option value="ET">Ethiopia</option>
                                                           
                                                            <option value="FJ">Fiji</option>
                                                            <option value="FI">Finland</option>
                                                            <option value="FR">France</option>
                                                            
                                                            
                                                            <option value="GE">Georgia</option>
                                                            <option value="DE">Germany</option>
                                                            <option value="GH">Ghana</option>
                                                            
                                                            <option value="GR">Greece</option>
                                                           
                                                            <option value="HK">Hong Kong</option>
                                                            <option value="HU">Hungary</option>
                                                            <option value="IS">Iceland</option>
                                                            <option value="IN">India</option>
                                                            <option value="ID">Indonesia</option>
                                                            <option value="IR">Iran (Islamic Republic of)</option>
                                                            <option value="IQ">Iraq</option>
                                                            <option value="IE">Ireland</option>
                                                            <option value="IL">Israel</option>
                                                            <option value="IT">Italy</option>
                                                            <option value="JM">Jamaica</option>
                                                            <option value="JP">Japan</option>
                                                            <option value="JO">Jordan</option>
                                                            <option value="KZ">Kazakhstan</option>
                                                            <option value="KE">Kenya</option>
                                                            
                                                            
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12">
                    <div class="panel panel-default">
                        <div class="panel-heading mg">
                            <h3 class="panel-title">Donation Details</h3>
                        </div>
        
                        <div class="panel-body AF">
                            <div class="col-sm-6">
                                <div class="form-group ">
                                    <label for="cardNumber " class="sg ">Amount</label>
                                    <div class="input-group ihg">
                                        <input type="text" class="form-control" name="Amount" placeholder="&#8377;" required autofocus />
                                        <span class="input-group-addon"></span>
                                    </div>
                                </div>
                            </div>


                            <div class="col-sm-6">
                                <label for="donateTye" class="sg">Frequency</label>
                                <select name="donateType" id="donateType" class="form-control">
                                <option value="" selected="selected">(please select option)  &#x25BC;</option>
                                    <option value="once">Once </option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="weekly">LifeTime</option>
                                </select>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div class="col-xs-12 ">
                    <div class="panel panel-default">
                        <div class="panel-heading mg">
                            <h3 class="panel-title">Payment Details</h3>
                        </div>
                        <div class="pdm">
                            <div class="panel-body AF">
                                <form role="form" id="payment-form">
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <div class="form-group cardnumber">
                                                <label for="cardNumber" class="sg">CARD NUMBER</label>
                                                {/* <div class="input-group"> */}
                                                    <input type="text" class="form-control " name="cardNumber" placeholder="Valid Card Number" required autofocus data-stripe="number" />
                                                    <span class="input-group-addon"></span>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs- col-md-7 ">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <label for="expMonth" class="sg">EXPIRATION DATE</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-xs-6 col-lg-6 pl-ziro">
                                                    <input type="text" class="form-control" name="expMonth" placeholder="MM" required data-stripe="exp_month" />
                                                </div>
                                                <div class="col-xs-6 col-lg-6 pl-ziro">
                                                    <input type="text" class="form-control" name="expYear" placeholder="YY" required data-stripe="exp_year" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-5 col-md-5 pull-right">
                                            <div class="form-group ">
                                                <label for="cvCode" class="sg">CVV</label>
                                                <input type="password" class="form-control" name="cvCode" placeholder="CVV" required data-stripe="cvc" />
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row donatebutton">
                                        <div class="col-xs-12 donatebutton">
                                            <button class="btn btn-success btn-lg" type="submit">Donate Now</button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <p class="payment-errors"></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                         </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Donation;