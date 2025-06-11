import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'
import Home from './pages/Home'
import ProductId from './pages/ProductId'
import Contacts from './pages/Contacts'
import Basket from './pages/Basket'



const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        {/* Bu yerda index route Home componentini render qiladi */}
        <Route index element={<Home />} />
        {/* products/:id yo‘li orqali mahsulot sahifasi */}
        <Route path="/products/:id" element={<ProductId />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/basket" element={<Basket/>} />
      </Route>
    </Routes>
  )
}

export default App
