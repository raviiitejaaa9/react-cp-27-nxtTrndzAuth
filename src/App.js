import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'

import './App.css'

const App = () => (
  <div className="app-container">
    <Header />
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </div>
)

export default App
