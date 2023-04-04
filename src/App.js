// components
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';

// styles
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
