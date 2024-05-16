import { useState } from 'react'
 import './App.css'
 import { About,Footer,Header,Testimonial,Skills,Work } from './containers'
 import { Navbar } from './components'

function App() {
   
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      {/*<Testimonial/>*/}
      <Footer/>
    </div>
  )
}

export default App
