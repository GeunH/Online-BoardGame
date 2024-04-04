import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Register from '@pages/Register';
import Login from '@pages/Login';

import { PAGE_URL } from '@util/constants';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${PAGE_URL.HOME}`} element={<Register />} />
        <Route path={`${PAGE_URL.REGISTER}`} element={<Register />} />
        <Route path={`${PAGE_URL.LOGIN}`} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
