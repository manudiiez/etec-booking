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
/* ------------------------------ GLOBALSTYLES ------------------------------ */
import { GlobalStyles } from "./theme/theme";
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemSignInContainer from "./pages/credentials/ItemSignInContainer";
import ItemSignUpContainer from "./pages/credentials/ItemSignUpContainer";
import Home from "./pages/home/Home";
import ItemNavbarContainer from "./components/navbar/ItemNavbarContainer";
import ItemFooter from "./components/ItemFooter";
import Lab from "./pages/lab/Lab";
import User from "./pages/user/User";



const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext)

  if (!user) {
    return <Navigate to='/users' />
  }

  return children
}


function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <ItemNavbarContainer/>
        <Routes>
          {/* LOGIN */}
          <Route path="/users">
            <Route index element={<ItemSignInContainer/>} />
            <Route path="signup" element={<ItemSignUpContainer/>} />
          </Route>
          <Route path="/">
            <Route index element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            } />
          </Route>
          <Route path="/lab/:id">
            <Route index element={
              <ProtectedRoute>
                <Lab/>
              </ProtectedRoute>
            } />
          </Route>
          <Route path="/user">
            <Route index element={
              <ProtectedRoute>
                <User/>
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
        <ItemFooter/>
      </BrowserRouter>
    </>
  );
}

export default App;
