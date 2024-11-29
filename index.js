import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import FacebookemojiCounter from './Facebookemoji';
import ToggleModeComponent from './ToggleModeComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <FacebookemojiCounter type="Like" />
    <FacebookemojiCounter type="Love" />
    <FacebookemojiCounter type="happy" />

    <ToggleModeComponent/>
  </React.Fragment>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
