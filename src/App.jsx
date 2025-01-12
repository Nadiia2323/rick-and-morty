import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav.jsx'
import MyFetch from './Components/MyFetch.jsx'

import React from 'react'


function App() {

  const [searchWord, setSearchWord] = useState("");
  console.log(searchWord)

  

  return (
    <>
      <Nav searchFunction={setSearchWord} />
      <MyFetch searchWord={searchWord} />
     
    </>
  )
}

export default App
