import Button from '../components/Common/Button';
import Header from '../components/Common/Header';

const Register = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="border-1 flex w-1/2 flex-col gap-16 rounded-xl border-2 border-solid border-blue p-16">
        <div className="flex items-center justify-center gap-5">
          <text className="whitespace-nowrap">닉네임:</text>
          <div className="left-36 ml-4 flex h-10 w-4/6 flex-col justify-center rounded-xl border-2 border-solid border-blue px-1 sm:ml-0">
            <input className="outline-none" />
          </div>
          <Button
            text="중복확인"
            onClick={() => {
              console.log('중복확인');
            }}
          />
        </div>
        <Button
          text="등록"
          onClick={() => {
            console.log('등록 후 홈으로 이동');
          }}
        />
      </div>
    </div>
  );
};

export default Register;
