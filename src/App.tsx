import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import DivingSpotInformationSearch from './pages/DivingSpotInformationSearch'
import DivingInformation from './pages/DivingInformation'
import IntroductionToDiving from './pages/IntroductionToDiving'
import NoMatch from './pages/NoMatch'
import Fotter from './components/Fotteer'
import { Header } from 'src/components/Header'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DivingSpotInformationSearch />} />
        <Route path="/DivingInformation" element={<DivingInformation />} />
        <Route
          path="/IntroductionToDiving"
          element={<IntroductionToDiving />}
        />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Fotter />
    </>
  )
}

export default App
