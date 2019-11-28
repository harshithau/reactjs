import React from 'react'

var Contacts = ({ list,list1 }) => {
  return (
    <div>
      <h1>Contact List</h1>
        <div>
          <h2>{list.login}</h2>
          <h2>{list.id}</h2>
          <h2>{list.avatar_url}</h2>
        </div>  <hr/>

          {list1.map((contact) => (
          <div>
          <h2>{contact.id}</h2>
          <h2>{contact.name}</h2>
          <h2>{contact.email}</h2>
        </div>
        ))}
      </div>

  )
};


export default Contacts;