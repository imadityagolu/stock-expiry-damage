import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import First from './Pages/First';
import Stock from './Pages/Stock';
import Expiry from './Pages/Expiry';
import Damage from './Pages/Damage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <First/>,
    children:[
      {
        index: true,
        element: <Stock/>
      },
      {
        path: "/stock",
        element: <Stock/>
      },
      {
        path: "/expiry",
        element: <Expiry/>
      },
      {
        path: "/damage",
        element: <Damage/>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App
