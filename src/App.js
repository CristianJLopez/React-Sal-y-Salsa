
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from './components/Login';
import UserAuthenticated from './components/UserAuthenticated';
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const {isAuthenticated} = useAuth0();
  return (
    <div className="App">
      {isAuthenticated ?(
        <UserAuthenticated/>
      ):
        <LoginButton/>
      }
    </div>
  );
}

export default App;
