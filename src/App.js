import React from 'react'
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import CardDetail from './components/CardDetail/CardDetail';

export function App() {
  return (
    <div className="App">
    <Nav/>
    <Routes>
      <Route path="/rickandmorty"  element={<Home/>}/>
      <Route path="/rickandmorty/characters/:id"  element={<CardDetail/>}/>
    </Routes>
    </div>
  );
}

export default App;
