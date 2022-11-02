import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import SingleUser from "./pages/single/SingleUser";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { labInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import {labColumns , userColumns } from "./datatablesource";
import Profile from "./pages/profile/Profile";
import SingleLab from "./pages/single/SingleLab";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext)

    if (!user || !user.isAdmin) {
      return <Navigate to='/login' />
    }

    return children
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
            } />
            <Route path="profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
            } />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={
                <ProtectedRoute>
                  <List columns={userColumns} title='Usuarios'/>
                </ProtectedRoute>
              } />
              <Route path=":userId" element={<SingleUser />} />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Añadir un nuevo usuario" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="lab">
              <Route index element={
                <ProtectedRoute>
                  <List columns={labColumns} title='Laboratorios'/>
                </ProtectedRoute>
              } />
              <Route path=":labId" element={<SingleLab />} />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={labInputs} title="Añadir un nuevo producto" />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
