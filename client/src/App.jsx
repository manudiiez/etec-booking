import { useContext } from "react";
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
/* -------------------------------- COONTEXT -------------------------------- */
import { AuthContext } from "./context/AuthContext";
/* ------------------------------- COMPONENTS ------------------------------- */
import Home from "./pages/home/Home";
import Lab from "./pages/lab/Lab";
import SignIn from "./pages/user/SignIn";
import SignUp from "./pages/user/SignUp";



const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext)

  if (!user) {
    return <Navigate to='/users' />
  }

  return children
}


function App() {
  return (
    <div className="container-lg">
      <BrowserRouter>
        <Routes>
          {/* LOGIN */}
          <Route path="/users">
            <Route index element={<SignIn/>} />
            <Route path="signup" element={<SignUp/>} />
          </Route>
          <Route index element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          } />
          <Route path="/lab/:id" element={
            <ProtectedRoute>
              <Lab/>
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
