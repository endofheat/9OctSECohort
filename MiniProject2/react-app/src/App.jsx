import { useState } from 'react'
import './App.css' 
import { UserProvider } from './context/UserContext'
import ResponsiveAppBar from './components/NavBarMUI'
import MyThemeProvider from './context/MyThemeContext'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/footer'

function App() {

  return (
    <>
      <UserProvider>
        <MyThemeProvider>
          <ResponsiveAppBar />
          <AppRoutes />
          <Footer />
        </MyThemeProvider>
      </UserProvider>
    </>
  );
}

export default App
