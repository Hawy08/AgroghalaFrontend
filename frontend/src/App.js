import {
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registrationform from "./Components/Registrationform";
import Navbar from "./SemiComponents/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Feedback from "./Components/Feedback";
import Ghalas from "./Components/Ghalas";
import Blogspage from "./Components/Blogspage";
import Sokopage from "./Components/Sokopage";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Registrationform /> },
  { path: "/login", element: <Login/> },
  { path: "/feedback", element: <Feedback/> },
  { path: "/ghalas", element: <Ghalas/> },
  { path: "/blogs", element: <Blogspage/> },
  { path: "/soko", element: <Sokopage/> },
]);

function App() {
  return (
    <div className="md:px-10">
        <Navbar />
      <RouterProvider router={router}>
        <Routes>
          <Route element={router} />
        </Routes>
      </RouterProvider>
    </div>
  );
}

export default App;
