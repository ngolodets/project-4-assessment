import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import LeftBox from './LeftBox';
import RightBox from './RightBox';

function App() {
  const [usersLeftCount, setUsersLeftCount] = useState(10);
  const [usersRightCount, setUsersRightCount] = useState(0);
  const [allLeftUsers, setAllLeftUsers] = useState([]);
  const [allRightUsers, setAllRightUsers] = useState([]);

  useEffect(() => {
    console.log("getting users")
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setAllLeftUsers(response.data);
      }).catch(function (error) {
        console.log(error)
      })
  }, [])

  function moveLeftUser(count) {
    console.log('Count:', count);
    let leftUsers = Array.from(allLeftUsers);
    let rightUsers = Array.from(allRightUsers);
    //console.log(leftUsers)
    if (count > 0 && count <= 10) {
      rightUsers.push(leftUsers[count - 1])
      setAllRightUsers(rightUsers)
      leftUsers.pop(leftUsers[count - 1])
      setAllLeftUsers(leftUsers)
      count--;
      setUsersLeftCount(count);
      setUsersRightCount(usersRightCount + usersLeftCount - count);
      //console.log('right users count:', usersRightCount)
    }
  }

  function moveRightUser(count) {
    console.log('Count:', count);
    let leftUsers = Array.from(allLeftUsers);
    let rightUsers = Array.from(allRightUsers);
    //console.log(leftUsers)
    if (count > 0 && count <= 10) {
      leftUsers.push(rightUsers[count -1])
      setAllLeftUsers(leftUsers)
      rightUsers.pop(rightUsers[count - 1])
      setAllRightUsers(rightUsers)
      count--;
      setUsersRightCount(count);
      setUsersLeftCount(usersLeftCount + usersRightCount - count);
    }
  }

  return (
    <div>
      <div className='rightpanel' style={{display: 'inline-block'}}>
        <button onClick={() => moveLeftUser(usersLeftCount)}>Move Right</button>
        <p>Users: {usersLeftCount}</p>
        <LeftBox users={allLeftUsers} moveLeftUser={moveLeftUser} />
      </div>
      <div className='rightpanel'>
      <button onClick={() => moveRightUser(usersRightCount)}>Move Left</button>
      <p>Users: {usersRightCount}</p>
        <RightBox users={allRightUsers} />
      </div>
    </div>
  );
}

export default App;
