import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './context/AuthContext'

import AppRoutes from './routes'
import Sidebar from './components/Sidebar'

import theme from './global/theme'
import './global/styles.css'

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter >
          <Sidebar />
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}
