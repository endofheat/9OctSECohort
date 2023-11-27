import './App.css'
import ActivityFinder from './components/ActivityFinder'
import BitcoinRates from './components/BitcoinRates'
import ClockDisplay from './components/clock'
// import RefCounter from './components/RefCounter'
// import ReducerCounter from './components/ReducerCounter'
import PostListReducer from './components/PostListReducer'
import SubscribeForm from './components/SubscribeForm'
import { UserProvider } from './context/UserContext'
import LoginForm from './components/LoginForm'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar'
import Footer from './components/footer'
import MyThemeProvider from './context/MyThemeContext'


function App () {
  return (
    <>
      <UserProvider>
        <MyThemeProvider>
          {/* provider component is at top level */}
          {/* <ClockDisplay /> so all children can use context data */}
          {/* <MoviesList /> even if they have children of their own 
        <BitcoinRates />
        <SubscribeForm />
        <ActivityFinder />
        <PostListReducer /> 
        <LoginForm />*/}
          <NavBar />
          <AppRoutes />
          <Footer />
        </MyThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
