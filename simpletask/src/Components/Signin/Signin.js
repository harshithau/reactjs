
import React, { Component } from 'react';
import './Signinpage.css';
import img from '../teddy.jpg';
import { SocialIcon } from 'react-social-icons';

class Signin extends Component {
render() {
return (
    <div className="textcolor">
        <h1>Signin form</h1>
        <img src={img} /><br /><br />
        <form>
<input type="text" placeholder="mobile or Email" className="input"></input><br /><br />
<input type="Password" placeholder="Password" className="input"></input><br /><br />
<div><input type="checkbox" className="checkbox"></input>
<span>Remember me</span>
Forget password
</div><br /><br />
<button className="signin">Signin</button>
</form><br />
Create a new account<br />
or
<div className="icons">
<SocialIcon url="http://twitter.com/jaketrent" />
<SocialIcon url="http://facebook.com/jaketrent" />
<SocialIcon url="http://whatsapp.com/jaketrent" />
</div>

</div>
);
}
}

export default Signin;