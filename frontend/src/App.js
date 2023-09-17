import {
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registrationform from "./Components/Registrationform";
import Navbar from "./SemiComponents/Navbar";
import Home from "./Components/Home";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Registrationform /> },
  { path: "/login", element: <div>"Hello login"</div> },
  { path: "/feedback", element: <div>"Hello feedback"</div> },
  { path: "/ghalas", element: <div>"Hello ghalas"</div> },
  { path: "/blogs", element: <div>"Hello blogs"</div> },
  { path: "/soko", element: <div>"Hello soko"</div> },
]);

function App() {
  return (
    <div className="px-10">
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
