import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './NotFound'
import { Home } from 'lucide-react'
import { HomePage } from './HomePage'
import { Toaster } from "./components/ui/toaster"


function App() {
  return (
    <>
    <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
