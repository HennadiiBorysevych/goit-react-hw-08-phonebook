import { Navigation } from './navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { Contacts } from 'pages/Contacts';
import { getUser } from 'redux/Auth/AuthOperations';
import { useEffect } from 'react';
import { PublicRoute } from 'components/Routes/PublicRoute';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { Home } from 'pages/Home';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route path="register" element={<Register />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
