import {Switch} from 'react-router-dom'

import About from './components/About'

import Home from './components/Home'

import Login from './components/Login'

import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <>
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <ProtectedRoute exact path="/login" component={Login} />
    </Switch>
  </>
)

export default App
