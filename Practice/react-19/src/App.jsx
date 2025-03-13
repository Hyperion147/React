import { useState } from 'react'
import './App.css'
import Search from './components/Search'

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main>
      <div className='pattern' />
      <div className='wrapper'>

        <header>
          <img src="./hero-img.png" alt="Background" />
          <h1>Find <span className='text-gradient'>Movies</span></h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      </div>


    </main>
  )
}

export default App
