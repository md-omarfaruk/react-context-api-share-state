import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Shipment from './components/Shipment';

export  const categoryContext = createContext();


function App() {

  const [category, setCategory] = useState('laptop');


  return (
    <categoryContext.Provider className="App" value= {[category, setCategory]}>
      <Header></Header>
      <Home></Home>     
      <Shipment></Shipment>
    </categoryContext.Provider>
  );
}

export default App;
