import React from 'react';

class ChangeColorButton extends React.Component {
constructor(props) {
super(props);
this.handleClick = this.handleClick.bind(this);
}
handleClick() {
this.props.clickHandler();
}
render() {
return (
<button onClick={this.handleClick} style={{backgroundColor: this.props.currentColor,margin:'350px'}}>I dont like blue {this.props.currentColor}</button>

);
}
} 

export default ChangeColorButton;