import Button from '@components/Common/Button';

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between px-36 py-4">
      <text>온라인 보드게임</text>
      <Button
        text="로그인"
        onClick={() => {
          console.log('로그인으로 이동');
        }}
      />
    </div>
  );
};

export default Header;
