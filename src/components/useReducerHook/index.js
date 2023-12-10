import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './UseReducer';
import AltUseReducer from './AltUseReducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UseReducer /> */}
    <AltUseReducer/>
  </React.StrictMode>
);

