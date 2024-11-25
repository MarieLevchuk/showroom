import { Box, Button, Container, Stack } from '@mui/material'
import './App.css'
import HeadSection from '../HeadSection/HeadSection'
import MainSection from '../MainSection/MainSection'
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import { Provider } from 'react-redux'; 
import store from '../../redux/store.js';
import ModelsSection from '../ModelsSection/ModelsSection'
import ModelPreviewSection from '../ModelPreviewSection/ModelPreviewSection'
import BuildsSection from '../BuildsSection/BuildsSection'

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Header/>
        {/* <BuildsSection/> */}
        {/* <ModelPreviewSection/> */}
        {/* <ModelsSection/> */}

        <HeadSection/>
        <MainSection/>
        <Footer/>
      </Provider>
    </>
  )

}
