import { Link } from 'react-router-dom';

import naverLogin from '@assets/image/naverLogin.svg';
import Header from '@components/Common/Header';

const Login = () => {
  return (
    <div className="flex flex-col items-center gap-16">
      <Header />
      <div className="flex w-1/3 flex-col items-center gap-5 rounded-xl border-4 border-solid border-blue p-16">
        <p className="text-darkBlue text-4xl font-extrabold pb-10">로그인</p>
        <img src={naverLogin} alt="네이버 로그인 버튼" className="w-3/5 rounded-lg" />

        {/* <Link to={''} className="flex w-1/2 justify-center">
          <img src={naverLogin} alt="네이버 로그인 버튼" className="w-4/5 rounded-lg" />
        </Link> */}
      </div>
    </div>
  );
};

export default Login;
