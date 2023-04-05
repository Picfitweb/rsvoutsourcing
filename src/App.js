// components
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';

// styles
import './App.css'

function App() {
  return (
    <Routes>
      <div className="App">
          <Route path='/' element={<Main/>} />
      </div>
    </Routes>
  );
}

export default App;
