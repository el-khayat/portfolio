import React ,{useEffect} from 'react';
import './App.scss';
import {Routes,Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact';
import Projects from './components/Projects/Projects'
import { NotifyVisite } from './firebase/firebase-util';
import axios from 'axios';

function App() {

     
  //creating function to load ip address from the API
  const getData = async()=>{
    const res = await axios.get('https://geolocation-db.com/json/')
    await NotifyVisite(res.data)
}

useEffect( ()=>{     
     return () => getData();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <Routes>
      
        <Route path="/" element={<Layout/>} >
        
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='projects' element={<Projects/>} />

        </Route>
        
    </Routes>
  );
}

export default App;
