import React, { Component } from 'react';

class Bind extends Component {
  state={
    backgroundColor:"red",
    Style :({
      backgroundColor:'blue'
    })
   
 }
  

     
  changeName=()=>{
     
       
        Style:({
          backgroundColor:'red'
        })
        this.setState({
        backgroundColor:"red",
      })
  }
 
  render() {
    return (
      <div>
          {/* <div><input type="text" onChange={this.changeName1} value ={this.state.num}/></div> */}
          <button onClick={this.changeName.bind(this,this.changeName)}>I don't like red</button>
          <div>{this.state.num}</div>
      </div>
    );
  }
  }

  export default Bind;





















// import React, { Component } from 'react';

// class Bind extends Component {
    
 
//     render() {
//         return (
           
               
//       <BodyBackgroundColor backgroundColor='#FF00FF'>
//         <h1>Home, sweet home.</h1>
//       </BodyBackgroundColor>
 
        
//         );
//     }
// }

// export default Bind;