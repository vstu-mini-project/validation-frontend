import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from '@mui/material';
import AuthorizationComponent from './components/Authorization/AuthorizationComponent';


function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Navbar/>
      <Switch>
        <Route path="/authorization" component = {AuthorizationComponent}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
