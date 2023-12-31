import logo from './logo.svg';
import './App.css';
import PlayersPresentation from './components/PlayersPresentation';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Main from './components/Main';
import {Routes, Route} from "react-router-dom"
import Detail from './components/Detail';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<PlayersPresentation/>}></Route>
        <Route path='/Detail/:id' element={<Detail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
