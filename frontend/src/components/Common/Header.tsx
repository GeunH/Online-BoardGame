import { useNavigate } from 'react-router-dom';

import Button from '@components/Common/Button';
import { PAGE_URL } from '@util/constants';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full items-center justify-between px-36 py-4">
      <p>온라인 보드게임</p>
      <Button
        text="로그인"
        onClick={() => {
          navigate(PAGE_URL.LOGIN);
        }}
      />
    </div>
  );
};

export default Header;
