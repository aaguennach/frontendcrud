import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Register from './Register.jsx'
import RegisterCl from './ClassRegister.jsx'
import Form from './component/Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Register/> */}
    {/* <RegisterCl /> */}
    <Form />
  </StrictMode>,
)
