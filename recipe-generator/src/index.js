import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_z5pv90WXR',
    userPoolWebClientId: '293gtaqsa97hif6kna3136o2rg'
  },
  API: {
    endpoints: [
      {
        name: 'recipe-generator-api',
        endpoint: 'Yhttps://6gsyuvcyr3.execute-api.us-east-1.amazonaws.com/Prod'
      }
    ]
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
