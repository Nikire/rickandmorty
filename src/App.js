import React from 'react'
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import CardDetail from './components/CardDetail/CardDetail';
import SoftNotFound from './components/SoftNotFound/SoftNotFound';
export function App() {
  return (
    <div className="App">
    <Nav/>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/characters/:id"  element={<CardDetail/>}/>
      <Route
      path="*"
      element={<SoftNotFound/>}
    />
    </Routes>
    </div>
  );
}

export default App;
