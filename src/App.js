import { useState } from 'react';
import './App.css';
// import './components/Navbar'
import { Route ,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Login from './components/Login';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' component={Landing}/>
            <Route path='/login' component={Login}/>
        </Routes>
    </div>
  )
}

export default App
