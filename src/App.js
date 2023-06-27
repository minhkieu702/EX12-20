 import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Navigation from './components/Navigation';
  import {
  Routes,
  Route,
} from "react-router-dom";
import PlayersWithMap from './components/PlayersWithMap';
import DetailPlayer from './components/DetailPlayer';
import About from './components/About';

function App() {
 
  return (
     <>
     <Navigation/>
     
      <Routes>
        <Route path='/' element={<PlayersWithMap/>}></Route>
        <Route path='/about' element={<About/>}></Route>
       
        <Route path='/detail/:id' element={<DetailPlayer/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      
      <Footer/>
     </>
  )
}
export default App;
   
