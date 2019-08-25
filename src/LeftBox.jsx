import React, {useState} from 'react';

function LeftBox({users, moveLeftUser}) {
  let content;

  if (users.length > 0) {
    content = users && users.map((user, index) => {
      return (
          <div className='userbox' key={index}>
            <p key={index}>{user.name}</p>
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

export default LeftBox;