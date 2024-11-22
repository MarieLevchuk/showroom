import { Box, Button, Container, Stack } from '@mui/material'
import './App.css'
import HeadSection from '../HeadSection/HeadSection'
import MainSection from '../MainSection/MainSection'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ModelsSection from '../ModelsSection/ModelsSection'
import ModelPreviewSection from '../ModelPreviewSection/ModelPreviewSection'

export default function App() {
  return (
    <>
      <Header/>
      <ModelPreviewSection/>
      {/* <ModelsSection/> */}
      
      {/* <HeadSection/>
      <MainSection/> */}
      <Footer/>
    </>
  )

}
