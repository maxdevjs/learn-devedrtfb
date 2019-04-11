import React from 'react';
import Hello from './sayHello';
import Tweet from './tweet';

function App() {

  return (
    <div className="app">
      <h1>Hello React</h1>
      <Hello />
      <Tweet name="What" body="This is a random tweet" nol="32487623764623"/>
      <Tweet name="Why" body="This is NOT a random tweet" nol="0"/>
    </div>
  );
}

export default App;