import './Components/App.css';
import './Components/Header.css';
import UseEffectAPI from './Components/FetchData';
import Header from './Components/Header';
import Card from './Components/Card/Card';
// import { Navbar } from './Components/Navbar';
import Navbar from './Components/Navbar';
import { Router } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <Card />
      <UseEffectAPI />
      <Navbar/>
    </div>
  );
}

export default App;
