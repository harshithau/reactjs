// import React from 'react';
import Signup from './Components/Signup/Signup';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Signin from './Components/Signin/Signin';
import React , { Component } from 'react';
import './App.css';
// import Userinput from './Components/Userinput/Userinput';
// import Useroutput from './Components/Useroutput';
import Arithemetic from './Task4/Arithemetic/Arithemetic';

// import { bindExpression } from '@babel/types';
import Navbar from './Navbar/Navbar/Navbar';
import Bind from './Bind/Bind/Bind';




class  App extends Component {
  state = {
    Details :[{
      name: 'abc',
      age:20
    }]
  }
  buttonClickHandler=()=>{
   console.log("hi");
    this.setState({
      Details:[{
        name:"def"
      }]
    })
    }
   
   
  

render(){
return(
  <div>
     <Router>
         <switch>
         < Route exact path='/' component = {Navbar}></Route>
         < Route exact path='/' component = {Signup}></Route>
           <Route exact path='/signin' component = {Signin}></Route>
           < Route exact path='/Arithemetic' component = {Arithemetic}></Route>
           < Route exact path='/Bind' component = {Bind}></Route>


           
        </switch>
      </Router>
  {/* <Userinput/> */}
    {/* <Useroutput/>
   <App/> */}
   {/* <Bind/> */}
     {/* <Arithemetic/> */}
    {/* <Useroutput  UserName="ERROR"/>
    <Useroutput> i am {this.state.Details[0].name} and age is {this.state.Details[0].age}</Useroutput>
    <button  onClick ={this.buttonClickHandler }> click here</button>
   */}
    </div>
  );
} 
} 



export default App;



