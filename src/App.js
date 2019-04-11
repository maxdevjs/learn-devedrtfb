import React, {useState} from 'react';
import Tweet from './tweet';

import './App.css';

function App() {

  const [users, setUsers] = useState([
    {name: "Ed", message: "Hello there"},
    {name: "John", message: "I am John Snow"},
    {name: "traversy", message: "I am me"},
  ]);
  

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} body={user.message} />
      ))}
    </div>
  );
}

export default App;