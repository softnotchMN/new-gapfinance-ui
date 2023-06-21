import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Activate from './Components/Auth/Activate';
import Authorize from './Components/Auth/Authorize';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import SetPassword from './Components/Auth/SetPassword';
import Landing from './Components/Landing';
import PrivateLayout from './Components/Layout/PrivateLayout';
import PrivateRoute from './Components/Layout/PrivateRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="activate" element={<Activate />} />
          <Route path="authorize" element={<Authorize />} />
          <Route path="set-password" element={<SetPassword />} />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <PrivateLayout />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
