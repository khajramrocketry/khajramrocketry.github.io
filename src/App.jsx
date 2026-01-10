import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>Khajra Model Rocketry</header>
      <main>
        {
          <div>
          <div className="website_header">
            <img src="Khajra_logo.jpg" alt="logo"></img>
            <h1>Khajra Model Rocketry at U of M</h1>
          </div>
            
          <p>We are an engineering project team specializing in launching rockets and 
            having our members learn the process of building and launching their own rockets</p>

          <p>This is a test paragraph to see if anything has changed at all on the website</p>
          </div>
        }
      </main>

    </>
  )
}

export default App
