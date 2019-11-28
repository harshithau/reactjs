import React, { Component } from 'react';
import ChangeColorButton from './ChangeColorButton';

class Bind extends React.Component {
    constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
    color: 'red'
    };
}
changeColor() {
    this.setState((prevState, props) => ({
    color: prevState.color === 'red' ? 'blue' : 'red'
    }));
}
    render() {
    return (
    <div style={{height: '700px', width: '100%', backgroundColor: this.state.color}}>
        <ChangeColorButton clickHandler={this.changeColor} currentColor={this.state.color}></ChangeColorButton>
    </div>

    )
    }
    }
export default Bind;

























// import React, { Component } from 'react';

// class Bind extends Component {
//   state={
//       num:"harshitha"
//   }
//   changeName=(setNew)=>{
//       this.setState({
//           num:setNew
//       })
//   }
//   changeName1=(event)=>{
//       this.setState({
//           num:event.target.value
//       })
//   }
//   render() {
//     return (
//       <div>
//           <div><input type="text" onChange={this.changeName1} value ={this.state.num}/></div>
//           <button onClick={this.changeName.bind(this,"Darshitha")}>To change name</button>
//           <div>{this.state.num}</div>
//       </div>
//     );
//   }
//   }

//   export default Bind;