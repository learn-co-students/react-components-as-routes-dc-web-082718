import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login'
import About from './About'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  )
}





ReactDOM.render(
  <Router>
    <React.Fragment>
      <Navbar/>
      <Route path="/" render={Home} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);
