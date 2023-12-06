import {
  BrowserRouter as 
  Routes,
  Route,
  Link,
  NavLink,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import {  Courses, Home } from "./pages";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
    </Route>,
  ),
);

function App() {
  return (
    <>
      
     
        <RouterProvider router={router} />
      
    </>
  );
}

export default App;
