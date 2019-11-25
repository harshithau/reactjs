import React, { Component } from 'react';

class State extends Component {
    state = {
        Users: [
            { name: "jhon", age: 20},
            ],
        Users1: [
            {  age: 40 },
          
        ],
        Users2: [
            { name: "jhon", age: 40 },
            
        ],
        
    }
makeMeYounger = () => {
  const newState = this.state.Users.map((User) => {
      const tempUser = User;
      tempUser.age += 5;
      return tempUser;
  })
  console.log(newState);
  this.setState({ newState });
}
makeMeYounger1 = () => {
  

  const newState1 = this.state.Users1.map((User1) => {
  const tempUser1 = User1;
  if(tempUser1.age>0){
  tempUser1.age -=5; 
  return tempUser1;
  }
  })

  console.log(newState1);
  this.setState({ newState1 });
}
makeMeYounger2 = () => {
  const newState2 = this.state.Users2.map((User2) => {
    const tempUser2 = User2;
    tempUser2.age *= 5;
    return tempUser2;
  })
  console.log(newState2);
  this.setState({ newState2 });
}
  render() {
  return (
    <div>
      <div>
        <button onClick={this.makeMeYounger}>add</button>
        <br />
        <h1>{this.state.title}</h1>
          {
            this.state.Users.map((User) => (
            <div>User Age={User.age} name={User.name}</div>
              ))
          }
      
    </div>
      <div>
          <button onClick={this.makeMeYounger1}>sub</button>
          <br />
          <h1>{this.state.title}</h1>
          {
            this.state.Users1.map((User1) => (
            <div>User1 Age={User1.age} name={User1.name}</div>
              ))
          }
          {this.state.Users1.age}
      </div>
      <div>
          <button onClick={this.makeMeYounger2}>Multiply</button>
          <br />
          <h1>{this.state.title}</h1>
          {
          this.state.Users2.map((User2) => (
        <div>User2 Age={User2.age} name={User2.name}</div>
          ))
          }
      </div>
  </div>
)
}
}


export default State;



// state = {
//   n1: 20,
//   n2: 20,
//   n3: 20
//   }
  
//   subtract = () => {
//   if (this.state.n1 > 0) {
//   this.setState({ 
//   n1: this.state.n1-5})
//   }
//   }
//   addition = () => {
//   this.setState({ 
//   n2: this.state.n2+5})
//   }
//   multiplication = () => {
//   this.setState({ 
//   n3: this.state.n3*5})
//   }
//   render() {
//   return (
//   <div>
//   <button onClick={this.subtract}>sub</button>
//   <div>{this.state.n1}</div>
//   <button onClick={this.addition}>add</button>
//   <div>{this.state.n2}</div>
//   <button onClick={this.multiplication}>mul</button>
//   <div>{this.state.n3}</div>
//   </div>
//   );
//   }
//   }
