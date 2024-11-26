import { Box, Button, Container, Stack } from '@mui/material'
import './App.css'
import HeadSection from '../HeadSection/HeadSection'
import MainSection from '../MainSection/MainSection'
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import { Provider } from 'react-redux'; 
import store from '../../redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { PagesRouter } from '../../routes/PagesRouter.jsx'

export default function App() {
  return (
    <BrowserRouter >
      <div>
        <Provider store={store}>
          <Header/>
          <PagesRouter />
          {/* <BuildsSection/> */}
          {/* <ModelPreviewSection/> */}
          {/* <ModelsSection/> */}

          {/* <HeadSection/>
          <MainSection/> */}
          <Footer/>
        </Provider>
      </div>
    </BrowserRouter>
  )

}
