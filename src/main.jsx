import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Product from './components/Product.jsx'
import ProductView from './components/ProductView.jsx'
import AppStore from './ContextApi/Store.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';



createRoot(document.getElementById('root')).render(
  // <StrictMode>
   <AppStore>
    <BrowserRouter>
   <Routes>
    <Route path='/' element={ <App />}/>
    <Route path='/product' element={ <Product />}/>
    <Route path='/product/:id' element={ <ProductView />}/>
   </Routes>
   </BrowserRouter>
   </AppStore>
  // </StrictMode>,
)
