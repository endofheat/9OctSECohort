import { useState } from 'react'
import './App.css' 
import { UserProvider } from './context/UserContext'
import ResponsiveAppBar from './components/NavBarMUI'
import MyThemeProvider from './context/MyThemeContext'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/footer'
import { CssBaseline } from '@mui/material'

function App() {


  return (
    <>
    <MyThemeProvider>
      <UserProvider>
          <ResponsiveAppBar />
          <CssBaseline />
          <AppRoutes />
          <Footer />
      </UserProvider>
      </MyThemeProvider>
    </>
  );
}

export default App
