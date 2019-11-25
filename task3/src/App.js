import React , { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Userinput from './Components/Userinput/Userinput';
import Useroutput from './Containers/Useroutput';



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
    <Userinput/>
    <Useroutput/>
    <Useroutput  UserName="ERROR"/>
    <Useroutput> i am {this.state.Details[0].name} and age is {this.state.Details[0].age}</Useroutput>
    <button  onClick ={this.buttonClickHandler }> click here</button>
    </div>
  );
} 
} 



export default App;
