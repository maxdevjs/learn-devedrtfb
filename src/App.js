import React from 'react';

function App() {

  const sayHello = () => {
    console.log("Hhhhhhhh");
  }

  return (
    <div>
      <h1>Hello React</h1>
      <button onClick={sayHello}>Hhhhhh Me</button>
    </div>
  );
}

export default App;