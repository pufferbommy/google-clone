import React from 'react'
import Footer from './components/Footer'

// components
import Navbar from './components/Navbar'
import Search from './components/Search'

const App = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Search />
      <Footer />
    </div>
  )
}

export default App
