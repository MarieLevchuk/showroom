import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { ThemeProvider } from '@mui/material/styles'
import { AppLightTheme } from "./ThemeContext/theme.ts"
import { CssBaseline } from '@mui/material'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={AppLightTheme}>
      <CssBaseline />
        <App />
    </ThemeProvider>
  </StrictMode>
)
