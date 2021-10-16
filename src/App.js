import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { Route } from 'react-router-dom';
import Article from './components/Article';
import Account from './components/Account';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/' component={Home} /> 
      <Route exact path='/article' component={Article} /> 
      <Route exact path='/account' component={Account} /> 
      
    </div>
  );
}

export default App;
