import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import "./Main.scss";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/profile", element: <Profile /> },
  { path: "/cart", element: <Cart /> },
  { path: "/favorites", element: <Favorites /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
