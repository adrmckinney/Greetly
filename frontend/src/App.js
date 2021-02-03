import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Create from './components/Create'
import Explore from './components/Explore'
import Profile from './components/Profile'

function App () {
  const [username, setUsername] = useState('')
  const [token, setToken] = useState()

  function setAuth (username, token) {
    setUsername(username)
    setToken(token)
  }

  const isLoggedIn = (username && token)

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <div className='header-content'>
            <div className='top-row-header'>
              <div class='hero'>
                <h1>Greetly<span>- Card Maker -</span><span>Make custom greeting cards for any occasion</span></h1>
                <nav class='slidemenu'>
                  <Link to='/home'>
                    <input type='radio' name='slideItem' id='slide-item-1' class='slide-toggle' checked />
                    <label for='slide-item-1'><p class='material-icons'>home</p><span>Home</span></label>
                  </Link>

                  <Link to='/profile'>
                    <input type='radio' name='slideItem' id='slide-item-2' class='slide-toggle' />
                    <label for='slide-item-2'><p class='material-icons'>face</p><span>Profile</span></label>
                  </Link>

                  <Link to='/create'>
                    <input type='radio' name='slideItem' id='slide-item-3' class='slide-toggle' />
                    <label for='slide-item-3'><p class='material-icons'>create</p><span>Create</span></label>
                  </Link>

                  <Link to='/explore'>
                    <input type='radio' name='slideItem' id='slide-item-4' class='slide-toggle' />
                    <label for='slide-item-4'><p class='material-icons'>search</p><span>Explore</span></label>
                  </Link>
                  <div class='clear' />

                  <div class='slider'>
                    <div class='bar' />
                  </div>

                </nav>

              </div>
              {
            isLoggedIn
              ? (
                <span>Hello, {username} <button onClick={() => setToken(null)}>Log out</button></span>
                )
              : (
                <span>
                  <Link to='/login'>Login</Link> or <Link to='/register'>Register</Link>
                </span>
                )
          }
            </div>
            <div className='bottom-row-header'>
              <nav className='nav-bar'>
                <div>
                  <Link to='/home'>Home</Link>
                </div>
                <div>
                  <Link to='/profile'>Profile</Link>
                </div>
                <div>
                  <Link to='/create'>Create</Link>
                </div>
                <div>
                  <Link to='/explore'>Explore</Link>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <main className='main-content'>
          <div>
            <Switch>
              <Route path='/login'>
                <Login isLoggedIn={isLoggedIn} setAuth={setAuth} />
              </Route>
              <Route path='/register'>
                <Register isLoggedIn={isLoggedIn} setAuth={setAuth} />
              </Route>
              <Route path='/home'>
                <Home />
              </Route>
              <Route path='/profile'>
                <Profile />
              </Route>
              <Route path='/create'>
                <Create />
              </Route>
              <Route path='/explore'>
                <Explore />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App
