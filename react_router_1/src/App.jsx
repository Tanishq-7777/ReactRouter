import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { AppLayout } from "./components/layouts/AppLayouts";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetApiData";
import "./App.css";
import { MoviesDetails } from "./components/UI/MoviesDetails";
import { getMovieDetails } from "./api/GetMovieDetail";
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
          loader: getMoviesData,
        },
        {
          path: "/movie/:movieID",
          element: <MoviesDetails />,
          loader: getMovieDetails,
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
