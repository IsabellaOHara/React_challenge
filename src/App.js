import './App.css';
import Footer from './components/header_footer/footer';
import Header from './components/header_footer/header';
import Home from './components/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ContactUs from './components/contactUs';

import LoginControl from './components/login/loginControl';

function App() {
  return (
    <div className="App">
   
     <Router>
     <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginControl/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>

     </Router>
     <Footer/>
    </div>
  );
}

export default App;
