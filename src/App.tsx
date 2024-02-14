import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import routes from './config/routes'
import Navbar from "./components/Navbar";


function App() {


  return (
    <BrowserRouter>
      <div><Navbar/></div>
      <Routes>
        { routes.map((route: any, index: any) => (
          <Route
          key={index}
          path={route.path}
          element={
            <route.component />

          }
          />
        )) }
      </Routes>
    </BrowserRouter>
  )
}

export default App
