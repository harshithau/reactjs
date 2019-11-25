import React, { Component } from 'react';


 const  Useroutput = (props)=> {
   
        return (
            <div>
                <p> Search for the keywords to learn more about each warning  and  {props.UserName}.
                To ignore, add // eslint-disable-next-line  to the line before.</p>
                <div>{props.children}</div>
            </div>
        );
    }
    

export default Useroutput;