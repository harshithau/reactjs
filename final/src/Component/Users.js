
















import React, { Component } from 'react';
import Contacts from './Contacts';
import { file } from '@babel/types';

class Users extends Component {
  render() {
    return (
      <Contacts list={this.state.list} list1={this.state.list1}/>
    )
  }
  state = {
    list: ' ',
    list1:[]
  }

    componentDidMount() {
      fetch('https://api.github.com/users/KrunalLathiya')
      .then(res => res.json())
      .then((data) => {
        this.setState({ list: data })
      })
      .catch(console.log)

      fetch('http://jsonplaceholder.typicode.com/users')
      // fetch('https://api.github.com/users/KrunalLathiya')
      .then(res  => res.json())
      .then((file) => {
        this.setState({ list1:file})
      })
      .catch(console.log)
    
}

}

export default Users;




