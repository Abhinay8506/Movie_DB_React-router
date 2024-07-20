import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { apiKey } from "./constants";

//pages import
import Error from "./pages/Error";
import Home from "./pages/Home";
import Root from "./pages/Root";
import SingleMovieDetail from "./pages/SingleMovieDetail";

//import loader
import { loader as MovieLoader } from "./pages/Home";
import { loader as SingleMovieLoader } from "./pages/SingleMovieDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route to="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<Home />} loader={MovieLoader} />
      <Route
        path="/details/:imdbId"
        element={<SingleMovieDetail />}
        loader={SingleMovieLoader}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
