import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Tree from './Tree.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github, { githubLoader } from './components/github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Tree />}>
    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='user/:id' element={<User />} />
    <Route 
    path='github'
    element={<Github />}
    loader={githubLoader}
    />
  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
