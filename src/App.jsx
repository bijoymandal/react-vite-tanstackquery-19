import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { MainLayout } from './components/Layouts/MainLayout';
import { Home } from './Pages/Home';
import { FetchOld } from './Pages/FetchOld';
import { FetchRQ } from './Pages/FetchRQ';

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/trad",
        element:<FetchOld />,
      },
      {
        path:"/rq",
        element:<FetchRQ />,
      },
    ],
  }
]);


const App = ()=>{
  return <RouterProvider router={router}></RouterProvider>
};

export default App;
