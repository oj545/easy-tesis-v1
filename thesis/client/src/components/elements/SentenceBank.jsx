import React from 'react';
import './css/sentencesBank.css';

function Sentence({ sentences, copyHandler, index }) {
  return (
    <ul className="sentence">
      {sentences.map((sentence, i) => (
        <li key={i}>
          <div className="" onClick={(e) => copyHandler(sentence)}>
            <small>{i + 1}</small>
            <p>{sentence}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Sentence;
