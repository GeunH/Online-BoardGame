import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Register from '@/pages/Register';

import { PAGE_URL } from '@util/constants';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${PAGE_URL.REGISTER}`} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
