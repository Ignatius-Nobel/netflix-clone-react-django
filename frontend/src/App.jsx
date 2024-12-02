import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Movies from './Pages/Movies/Movies'
import Show from './Pages/TV/Show'
import NewPopular from './Pages/NewPopular/NewPopular'
import PrivateRoute from "./PrivateRoute";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute children={<Home />} />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/movies",
      element: <PrivateRoute children={<Movies />} /> 
    },
    {
      path: "/tv-series",
      element: <PrivateRoute children={<Show />} />  
    },
    {
      path: "/new-and-popular",
      element: <PrivateRoute children={<NewPopular />} /> 
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
