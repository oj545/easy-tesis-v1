import React from 'react';
import './css/Formlayout.css';
import Container from 'react-bootstrap/esm/Container';
function Formlayout(props) {
  return (
    <Container>
      <div className="form-layout">{props.children}</div>;
    </Container>
  );
}

export default Formlayout;
