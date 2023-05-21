import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ErrorPage, Home, Search, SignIn, SignUp } from './modules'
import { ProtectedRoute } from './components'
import Layout from './components/Layout/Layout'
import { useHeaderStore } from './store'

const App = () => {
  const isDark = useHeaderStore(store => store.isDark)
  const setIsDark = useHeaderStore(store => store.setIsDark)

  useEffect(() => {
    const storedPreference = localStorage.getItem('darkModePreference');
    console.log(JSON.parse(storedPreference));
    if (storedPreference) {
      setIsDark(JSON.parse(storedPreference));
    }
    else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDarkMode);
    }
  }, [setIsDark])

  useEffect(() => {
    if (isDark)
      document.body.classList.add('dark');
    else
      document.body.classList.remove('dark');

    localStorage.setItem('darkModePreference', JSON.stringify(isDark))
  }, [isDark]);

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