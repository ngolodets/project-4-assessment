import React, {useState} from 'react';

function RightBox({users}) {
  let content = users ? users : [];

  if (content.length) {
    content = content.map((user, index) => {
      return (
        <div className='userbox' key={index}>
          <p>{user.name}</p>
        </div>
      )
    })
  } else {
    content = <p>Nothing on This Side!</p>
  }

  return (
    <div className='App'>
      {content}
    </div>
  )
}

export default RightBox;