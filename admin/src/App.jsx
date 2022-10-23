import { useContext } from "react";
/* --------------------------------- CONTEXT -------------------------------- */
import { AuthContext } from "./context/AuthContext";
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
/* ------------------------------- COMPONENTS ------------------------------- */
import Home from "./pages/home/Home";
import ItemSignInContainer from "./pages/credentials/ItemSignInContainer";
import DefaultContainer from "./components/default/DefaultContainer";



const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext)

  if (!user || !user.isAdmin) {
    return <Navigate to='/users' />
  }
  
  console.log(user)
  return children
}


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<ItemSignInContainer />} />
          <Route path="/">
            <Route index element={
                <ProtectedRoute>
                  <DefaultContainer>
                    <Home/>
                  </DefaultContainer>
                </ProtectedRoute>
              } />
          </Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

