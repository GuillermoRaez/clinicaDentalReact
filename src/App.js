
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';

import Register from './containers/Register/Register';
import Userprofile from './containers/Userprofile/Userprofile';
import Dentistprofile from './containers/Dentistprofile/Dentistprofile';
import Userlogin from './containers/Userlogin/Userlogin';
import Dentistlogin from './containers/Dentistlogin/Dentistlogin';
import Appointments from './containers/Appointments/Appointments';
import Userregister from './containers/Userregister/Userregister';
import Dentistregister from './containers/Dentistregister/Dentistregister';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
        <Switch>

          <Route path="/" exact component={Home}/>
          <Route path="/userlogin" exact component={Userlogin}/>
          <Route path="/dentistlogin" exact component={Dentistlogin}/>
          <Route path="/userregister" exact component={Userregister}/>
          <Route path="/dentistregister" exact component={Dentistregister}/>
          <Route path="/userprofile" exact component={Userprofile}/>
          <Route path="/dentistprofile" exact component={Dentistprofile}/>
          <Route path="/appointment" exact component={Appointments}/>

        </Switch>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
