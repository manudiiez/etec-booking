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
        <Routes>
          {/* LOGIN */}
          <Route path="/users">
            <Route index element={<ItemSignInContainer/>} />
            <Route path="signup" element={<ItemSignUpContainer/>} />
          </Route>
          <Route index element={
            <ProtectedRoute>
              <h1>Home</h1>
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
