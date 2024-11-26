
import './App.css';

import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import {BrowserRouter as Router,Routes,Route,Link,NavLink } from 'react-router-dom'


function App() {

  

  return(
    <div className='App'>
      <Router>
        <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Aboutus">Aboutus</Link></li>
            <li><Link to="/Contactus">Contactus</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/Home' element={<Home/>}/>  
          <Route path='/Aboutus' element={<Aboutus/>}/>
          <Route path='/Contactus' element={<Contactus/>}/> 
          </Routes>
          </Router>   
      </div>

     
  );

  
}

export default App;
