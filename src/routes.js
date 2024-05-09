// routes.js
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

const routes = [
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/login",
    element: <Login />
  }
];

export default routes;
