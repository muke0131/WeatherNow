import './App.css';
import Navbar from './components/Navbar';
// import react,{Component} from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Forecast from './components/Forecast';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/forecast" element={<Forecast/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
