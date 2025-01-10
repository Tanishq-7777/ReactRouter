import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import Search from "./Search";
import SingleMovie from "./SingleMovie";
import { AppProvider } from "./context";
import "./App.css";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/movies/:id",
      element: <SingleMovie />,
    },
  ]);
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}
