import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Rootlayout from './layouts/rootlayout/Rootlayout.jsx'
import Homepage from './routes/homepage/Homepage.jsx'
import DashBoardlayout from './layouts/dashBoardLayout/DashBoardlayout.jsx'
import DashBoardpage from './routes/dashBoardpage/DashBoardpage.jsx'
import ChatPage from './routes/chatPage/ChatPage.jsx'
import SignInpage from './routes/siginPage/SignInpage.jsx'
import SignUppage from './routes/signUppage/SignUppage.jsx'


const router=createBrowserRouter([
  {
    element:<Rootlayout/>,
    children:[
      {
        path:"/",
        element:<Homepage/>
      },
      {
        path:"/sign-in/*", //star is for its (sign-in) other routes
        element:<SignInpage/>
      },
      {
        path:"/sign-up/*",
        element:<SignUppage/>
      },
      {
        element:<DashBoardlayout/>,
        children:[
          {
            path:'/dashboard',
            element:<DashBoardpage/>
          },
          {
            path:'/dashboard/chats/:id',
            element:<ChatPage/>
          }
        ] 
      }
    ]
    
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
