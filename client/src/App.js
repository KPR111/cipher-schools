import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
// import { useSelector } from "react-redux"
import themeConfigs from './configs/theme.configs'
import { ToastContainer } from "react-toastify"
import SigninForm from './components/SigininForm'

const App = () => {
  return (
    <div>
      <SigninForm/>
    </div>
  )
}

export default App