
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from './components/buttons/Login';
import UserAuthenticated from "./components/adminArea/UserAuthenticated"
import { useAuth0 } from "@auth0/auth0-react";
import Layout from './components/Layout';
function App() {

  const {isAuthenticated} = useAuth0();
  return (
    <Layout>
    <div className="App">
      {isAuthenticated ?(
        <UserAuthenticated/>
      ):
        <LoginButton/>
      }
    </div>
    </Layout>
  );
}

export default App;
