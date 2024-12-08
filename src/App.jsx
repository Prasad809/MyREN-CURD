import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignIn from './components/sign'
import LogIn from './components/login'
import Home from './components/home'
function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<LogIn/>}></Route>
                  <Route path='/signin' element={<SignIn/>}></Route>
                  <Route path='/home' element={<Home/>}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
