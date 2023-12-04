import { useState } from 'react'
import './App.css' 
import { UserProvider } from './context/UserContext'
import ResponsiveAppBar from './components/NavBarMUI'
import MyThemeProvider from './context/MyThemeContext'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/footer'
import UseData from './hooks/useData'

function App() {

  return (
    <>
    <MyThemeProvider>
      <UserProvider>
        <UseData>
          <ResponsiveAppBar />
          <AppRoutes />
          <Footer />
        </UseData>
      </UserProvider>
      </MyThemeProvider>
    </>
  );
}

export default App
