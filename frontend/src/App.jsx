import { useState, useRef } from 'react'
import NavBar from './components/NavBar'
import Menu from './components/Menu'
import './App.css'

function App() {
  return <main className='w-[100%]'>
    <NavBar />
    <Menu />
  </main>;
}

export default App;
