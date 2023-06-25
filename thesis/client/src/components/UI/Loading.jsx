import React from 'react';
import Page from './page';
import './css/loading.css';
import Spinner from 'react-bootstrap/Spinner';
function Loading() {
  return (
    <div className="loading">
      <div className="loader"></div>
      <h2>Loding</h2>
    </div>
  );
}

export default Loading;
