
import './App.css';


import Singin from './component/Singin';
import Signup from './component/Signup';

import ContactUs from './component/Form'
import Reportpage from './component/Reportpage';
import Menu from './component/Menu'
import Post_Public from './component/Post_Public';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Loading from './component/Loading';
import Report_information from './component/Report_information';
import Users from './component/Users';

function App() {
  return (
    <div>
      
      <Router>
      <Menu></Menu>
        <Routes>
         
          <Route path='/' element = {<Reportpage></Reportpage>}></Route>
          <Route path='/SignIn' element = {<Signup></Signup>}></Route>
          <Route path='/Public' element = {<Post_Public></Post_Public>}></Route>
          <Route path='/Users' element = {<Users></Users>}></Route>
          <Route path='/Report' element = {<Report_information></Report_information>}></Route>
        </Routes>
      </Router>
   
     
    
    
       
       
       
   
    </div>
  );
}

export default App;
