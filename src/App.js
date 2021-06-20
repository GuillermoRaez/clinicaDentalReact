
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';

import Userprofile from './containers/Userprofile/Userprofile';
import Dentistprofile from './containers/Dentistprofile/Dentistprofile';
import Appointments from './containers/Appointments/Appointments';
import Userregister from './containers/Userregister/Userregister';
import Dentistregister from './containers/Dentistregister/Dentistregister';
import Navbar from './components/Navbar/Navbar';
import Footbar from './components/Footbar/Footbar';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Usersappointments from './containers/Usersappointments/Usersappointments';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Route path="/navbar" exact component={Navbar}/>

        <Switch>

          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/userregister" exact component={Userregister}/>
          <Route path="/dentistregister" exact component={Dentistregister}/>
          <Route path="/userprofile" exact component={Userprofile}/>
          <Route path="/dentistprofile" exact component={Dentistprofile}/>
          <Route path="/myappointments" exact component={Usersappointments}/>

        </Switch>
        <Route path="/footbar" exact component={Footbar}/>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
