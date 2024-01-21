import React from 'react';
import logo from './logo.svg';
import Header from "./components/Header"
import { Routes, Route, Link} from "react-router-dom";
import Login from './pages/Login';
import DivingSpotInformationSearch from './pages/DivingSpotInformationSearch';
import DivingInformation from './pages/DivingInformation';
import IntroductionToDiving from './pages/IntroductionToDiving';
import NoMatch from './pages/NoMatch';
import Fotter from './components/Fotter';


const App: React.FC = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<DivingSpotInformationSearch/>}/>
      <Route path="/DivingInformation" element={<DivingInformation/>}/>
      <Route path="/IntroductionToDiving" element={<IntroductionToDiving/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="*" element={<NoMatch/>}/>
    </Routes>
    <Fotter />
    </>
  );
}

export default App;
