import {createBrowserRouter, RouterProvider, Route, Outlet} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Header from './components/header';
import Flooter from './components/flooter';
import Single from './pages/single';
import Write from './pages/write';

const Layout = () => {
  return(
    <div className='px-32'>
      <Header />
      <Outlet />
      <Flooter />
    </div>
  );
};

const router = createBrowserRouter([

  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/single",
        element:<Single />
      },
      {
        path:"/write",
        element:<Write />
      }
    ]
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/register",
    element:<Register />
  }

]);

function App() {
  return (
    <>

    <div className=''>
      <RouterProvider router={router} />
    </div>
      
    </>
  );
}

export default App;
