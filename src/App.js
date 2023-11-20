import {Switch, Route} from 'react-router-dom'
import AuthenticationRoute from './components/AuthenticationRoute/index'
import Home from './components/Home/index'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={AuthenticationRoute} />
    <Route exact path="/home" component={Home} />
  </Switch>
)

export default App
