import Button from './Button';

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between p-4">
      <text>온라인 보드게임</text>
      <Button
        text="로그인/회원가입"
        onClick={() => {
          console.log('로그인/회원가입으로 이동');
        }}
      />
    </div>
  );
};

export default Header;
