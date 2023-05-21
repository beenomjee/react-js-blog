import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ErrorPage, Home, Search, SignIn, SignUp } from './modules'
import { ProtectedRoute } from './components'
import Layout from './components/Layout/Layout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<ProtectedRoute element={Home} />} />
          <Route path='/search' element={<ProtectedRoute element={Search} />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App