import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rotas from './routes'
import {BrowserRouter} from 'react-router-dom';
import { Globalstyles } from './style/stylesGlobal';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Globalstyles />
    <Rotas />
    </BrowserRouter>
  </StrictMode>,
)
