import React from 'react';
import './css/page.css';

function Page(props) {
  return <div className="page">{props.children}</div>;
}

export default Page;
