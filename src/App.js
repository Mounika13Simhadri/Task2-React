import React from 'react'
import './index.css'
import FirstRect from './components/FirstRect'

import SecondRect from './components/SecondRect'

export default function App() {

  return (
   
    <div className="container" style={{backgroundImage: "url(images/img1.jpg)"}} >
      <FirstRect/>
      <SecondRect/>
    </div>
  )
}
