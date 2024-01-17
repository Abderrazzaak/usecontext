import React, { createContext } from 'react';
import './App.css';
import Main from "./components/Main"

export const Abdou = createContext ()

function App() {
  return (
    <div className='App'>
      <Abdou.Provider value="Redux">
      <Main/>
      </Abdou.Provider>
     
    </div>
    
  );
}

export default App;
