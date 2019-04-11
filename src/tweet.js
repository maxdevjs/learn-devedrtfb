import React from 'react';
import './App.css';

function Tweet(props) {
  return (
    <div className="tweet">
      <h3>{props.name}</h3>
      <p>{props.body}</p>
      <h3>Number of likes {props.nol}</h3>
    </div>
  );
}

export default Tweet;
