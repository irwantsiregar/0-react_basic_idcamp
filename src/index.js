import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import SayHello from './SayHello';
import InstagramProfile from './InstagramProfile';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SayHello name="Bill" company="Microsoft" />; // <p>Hello, Bill from Microsoft!</p>
    <SayHello name="Steve" company="Apple" />; // <p>Hello, Steve from Apple!</p>
    <SayHello name="Mark" company="Facebook" />; // <p>Hello, Mark from Facebook!</p>

    <InstagramProfile
      name="Dicoding Indonesia"
      username="dicoding"
      bio="Bangun Karirmu Sebagai Developer Profesional"
      isVerified // pemberian nilai boolean "true" cukup dengan menuliskan nama properti tanpa nilai apa pun
    />;

    {/* Children */}
    <SayHello>Dicoding</SayHello>; // Hello, Dicoding!
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
