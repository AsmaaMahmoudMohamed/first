import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer'
import Contact from './Component/Contact/Contact'
import About from './Component/About/About'
import Navbar from './Component/Navebar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './Component/Portfolio/Portfolio';
import Layout from './Component/Layout/Layout';


let x = createBrowserRouter( [
  { path:"", element : <Layout/> , children : [
    { index : true , element: <Home/>},
    { path : "contact" , element: <Contact/>},
    { path : "about" , element: <About/>},
    { path : "portfolio" , element: <Portfolio/>},
  ]},
  
])



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <RouterProvider router={x}></RouterProvider>; 
   

     
    </>
  )
}

export default App
