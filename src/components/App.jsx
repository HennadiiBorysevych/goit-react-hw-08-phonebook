import { Navigation } from './navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { Contacts } from 'pages/Contacts';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/contacts' element={<Contacts/>} />
        </Route>
      </Routes>

    </>
  );
};

export default App;
