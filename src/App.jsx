import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./form";
import './App.css';
import 'animate.css'
import Todo from "./todo";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  return (
    <div className='outer'>
      <div className='Inner-left animate__animated animate__slideInLeft animate__delay-1s '>
        <img src="\src\assets\img\todo.jpeg" alt="err" />
      </div>
      <div className='Inner-right'>
        <div className='inner'>
          <div className="animate__animated animate__slideInRight animate__delay-1s ">
            <h2 >Productive Mind</h2>
          </div>
          <p className="animate__animated animate__slideInRight animate__delay-2s">With only the features you need, todo is customized for individuals seeking a stress-free way to stay focused on their goals, projects, and tasks.</p>
          <a href="/get-started"><button className="animate__animated animate__fadeIn animate__delay-3s">Get started</button></a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<Form />} />
        <Route path="/todo" element={<Todo />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
