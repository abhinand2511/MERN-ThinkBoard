import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'

const HomePage = () => {
  return <div className='min-h-screen'>
    <Routes>
      <Route>path = "/" element = {<HomePage />}</Route>
      <Route>path = "/create" element = {<CreatePage />}</Route>
      <Route>path = "/note/:id" element = {<NoteDetailPage />}</Route>
    </Routes>
  </div>
}

export default HomePage