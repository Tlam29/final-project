import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'


import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/ Home'
import About from './pages/About'
import Posts from './pages/Post'
import Products from './pages/Product'
import SingleProduct from './pages/SingleProduct'
import Error from './pages/Error'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='products/:productId' element={<SingleProduct/>}/>
          <Route path='posts' element={<Posts/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
