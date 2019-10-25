import React from 'react';
import './App.css';
// import express from 'express'
// import axios from 'axios'
import Header from './components/Header';
import AllTools from './components/AllTools';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
