import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/Abput/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import NewsComponent from './components/News/NewsComponent.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "/",
//         element: <Home/>
//       },
//       {
//         path:"/about",
//         element: <About/>
//       },
//       {
//         path:"/contact",
//         element: <Contact/>
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/> 
      <Route path='/about' element={<About/>}/> 
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/user/:id' element={<User/>}/> 
      <Route path='/github' element={<Github/>}/> 
      <Route path='/news' element={<NewsComponent/>}/> 
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
