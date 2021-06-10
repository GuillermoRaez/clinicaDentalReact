
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Userprofile from './containers/Userprofile/Userprofile';
import Dentistprofile from './containers/Dentistprofile/Dentistprofile';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
        <Switch>

          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/userprofile" exact component={Userprofile}/>
          <Route path="/dentistprofile" exact component={Dentistprofile}/>

        </Switch>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
