import React, { Component } from 'react';
import '../Signup/Signup.css';
import Navbar from '../../Navbar/Navbar/Navbar';

class Signup extends Component {
    render() {
        return (
            <div>      
                     {/* <Navbar/> */}
            <div  className="container">
                <h1>Signup Form</h1>
               
           
                <form>
                <div  className="form" >
                   <div><input type="tex" name="user" placeholder="firstName" class="inpt"></input></div>
                   <div><input type="tex" name="user"  placeholder="lastName" class="inpt"></input></div>
                   <div><input type="tex" name="user" placeholder="email@example.com" class="inpt"></input></div>
                   <div><input type="Number" name="user" class="inpt" placeholder="please enter the phone number"></input></div>
                   <div> <input type="password" name="user" class="inpt" placeholder="password"></input></div>
                   <div> <input type="password" name="user" class="inpt" placeholder="confirm Password"></input></div>
                    <div className="color"><input type="checkbox"></input>
                   I agree to TERMS and PRIVACY POLICY</div>
                    <button type="submit"  className="btn">Log  In</button>
                    <a className="abc" href="/signin">Signin</a>
                 </div>
                </form>
              
            </div>
             </div>
        );
    }
}

export default Signup;