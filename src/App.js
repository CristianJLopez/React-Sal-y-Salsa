
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import UserAuthenticated from "./components/adminArea/UserAuthenticated"
import Home from './components/Home';
import Contacto from "./components/Contacto";
import { useAuth0 } from "@auth0/auth0-react";
import Carrousel from './components/Carrousel';

function App() {
  const {isAuthenticated} = useAuth0();
  return (
   
      
      <div className="App">
      {isAuthenticated ?(
        <UserAuthenticated/>
      ):
       <BrowserRouter>
          <Routes>
          
          <Route path="/carrousel" element={<Carrousel />} />
          
          </Routes>
        
         
          <Layout>
            <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserAuthenticated />} />
              <Route path="/contactanos" element={<Contacto />} />
              
            </Routes>
            
            </Layout>
         
        
        </BrowserRouter>
      }
        </div>
      
    
  );
}

export default App;
