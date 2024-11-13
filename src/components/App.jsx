import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/Home";
import WorkPage from "../pages/Work";
import AboutPage from "../pages/About";
import ProjectPage from "../pages/Project";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/work", element: <WorkPage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/work/:id", element: <ProjectPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
