
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
    <ExternalUser></ExternalUser>
    </div>
  )
  }

  function ExternalUser(){
    const [users, setUsers] = useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(data => setUsers(data))
    }, [])
    return(
      <div>
        <h1>External Users</h1>
        <h1>{users.length} </h1>
        {
          users.map(user => <User name={user.name} email={user.email}></User> )
        }
      </div>
    )
  }

  function User(props){
    return(
      <div>
        <h1>Name: {props.name} </h1>
      <h1>Email: {props.email} </h1>
      </div>
    )
  }

export default App;
