import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from 'react-router-dom'

// import bootstrap & Css for Design
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './App.css'

// import component
import Layout from './component/layout.jsx'
import Home from './component/Home/Home.jsx'
import Login from './component/login/Login.jsx'
import UserContextProvider from './constext/UserContextProvider.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '/home',
//         element: <Home />,
//       },
//       {
//         path: '/login',
//         element: <Login />,
//       },
//     ],
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </UserContextProvider>
)
