import React from 'react'
import './App.css'
import Blog from './components/Blog/Blog'
import Category from './components/Category/Category'
import Courses from './components/Courses/Courses'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import './MediaQuery.css'


const App = () => {
  return (
    <div>
      <Header />
      <Home/>
      <Category />
      <Courses />
      <Blog />
      <Footer />
    </div>
  )
}

export default App