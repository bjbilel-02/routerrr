import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Contact from "./Contact/Contact.jsx";
import Navig from "./Components/Navig";
// import Category from './Category/Category';
import Description from './Components/Description';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navig />
  <Routes>
  <Route path="/" element={<App />} />
  {/* <Route path="Contact" element={<Contact />} />
  <Route path="Category" element={<Category />} /> */}
  <Route path="Description" element={<Description />} /> 
  </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

