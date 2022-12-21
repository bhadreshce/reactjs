import logo from './logo.svg';
import './App.css';
import Navbar from './component/NavbarC';
import TextForm from './component/TextForm';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes ,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>

   
      
      <Navbar aboutText="about" />
       <Routes>
          <Route exact path="/about" element={<TextForm />} />
            
          
        </Routes>
    


     
  </BrowserRouter>
  );
}

export default App;
