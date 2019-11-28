import React, { Component } from 'react';
import '../Userinput/Userinput.css'

class Userinput extends Component {
    
     
    render() {
        return (
            <div  className="div">
                <input type="text" name="fname"/>
                <input type="text" name="lname"/>
                {/* <input type="Password" name="name"/>
                <input type="email" name="name"/> */}
                <button>submit</button>
                


            </div>
        );
    }
}

export default Userinput;