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
import ItemNavbarContainer from "./components/navbar/ItemNavbarContainer";
import Home from "./pages/home/Home";
import Lab from "./pages/lab/Lab";



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
      <ItemNavbarContainer/>
      <BrowserRouter>
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
            <Route path="lab/:id" element={
              <ProtectedRoute>
                <Lab/>
              </ProtectedRoute>
            } />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
