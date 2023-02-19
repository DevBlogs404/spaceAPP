import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './styles/app.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Destination from './components/Destination'
import Crew from './components/Crew';
import Technology from './components/Technology'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/destination' element={<Destination />}></Route>
        <Route path='/crew' element={<Crew />}></Route>
        <Route path='/technology' element={<Technology/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
