import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { AppLayout } from "./components/layouts/AppLayouts";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/Movie",
          element: <Movie />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
