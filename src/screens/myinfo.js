// myinfo.js

import React from 'react';
import '../styles/Grid.css';

const MyInfo = () => (
  <div>
    <h2>MyInfo Page</h2>
    <div className="grid-container">
      <div className="grid-item"><p>
      Welcome to our application! This is a simple React app with multiple pages
      and bottom navigation. Feel free to explore and learn more about our services.
    </p></div>
      <div className="grid-item">Item 3</div>
      
      <div className="grid-item">Item 5</div>
      <div className="grid-item">Item 6</div>
    </div>
  </div>
);

export default MyInfo;