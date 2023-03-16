import './App.css';
import {Routes , Route} from 'react-router-dom';

/* -------------- Components of Webservee app ------------- */

//import Navbar from './Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import { ContactUs } from './Pages/ContactForm';
import Page404 from './Pages/Page404';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/*' element={<Page404 />} />
      </Routes>  
    </>
  );
}

export default App;
