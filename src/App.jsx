import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import About from './components/About'
import Courses from './components/Courses'
import Teacher from './components/Teacher'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className=" bg-gray-200">
        <Hero />
        <About />
        <Courses />
        <Teacher />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App