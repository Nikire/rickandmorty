import React from 'react'
import './App.css';
import {Route,Routes, useNavigate} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import CardDetail from './components/CardDetail/CardDetail';

export function App() {
  const navigate=useNavigate();
  return (
    <div className="App">
    <Nav/>
    <Routes>
      <Route path="/rickandmorty"  element={<Home/>}/>
      <Route path="/rickandmorty/characters/:id"  element={<CardDetail/>}/>
      <Route
      path="*"
      element={
        React.useEffect(()=>navigate('/rickandmorty'),[])
      }
    />
    </Routes>
    </div>
  );
}

export default App;
