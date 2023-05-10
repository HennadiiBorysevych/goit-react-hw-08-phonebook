import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Navigation } from './navigation/Navigation';
import { Register,Contacts,Login,Home } from 'pages';
import { getUser } from 'redux/Auth/AuthOperations';
import { useEffect } from 'react';
import { PublicRoute,PrivateRoute } from 'components/Routes';

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
