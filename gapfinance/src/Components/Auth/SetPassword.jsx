import { useEffect, useState } from 'react';
import {
  FaEye,
  FaEyeSlash,
  FaLock,
  FaMailBulk,
  FaUserLock,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUserPassword } from '../../features/auth';
import LogoDark from '../../assets/login.png';
import Hero from '../../assets/bg.png';
import Navbar from '../Landing/Navbar';

const SetPassword = () => {
  document.title = 'GAP Finance | Signin';
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [seePassword, setSeePassword] = useState('password');
  const [seeCpassword, setSeeCpassword] = useState('password');
  const [passErr, setPasserr] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, confirmPass, error, errorMsg, user } = useSelector(
    (state) => state.auth
  );
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Hello');
    if (!password || !cpassword) {
      setPasserr(true);
      return;
    }
    if (password !== cpassword) {
      setPasserr(true);
      return;
    }

    dispatch(setUserPassword({ id: user?.id, password }));
  };

  useEffect(() => {
    if (confirmPass) {
      navigate('/login');
    }
  }, [dispatch, confirmPass, error, navigate]);
  useEffect(() => {
    if (error) {
      const timeOut = setTimeout(() => {
        dispatch(resetError());
      }, 3000);
      return () => clearTimeout(timeOut);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const onViewPassword = () => {
    if (seePassword === 'password') {
      setSeePassword('text');
    } else {
      setSeePassword('password');
    }
  };
  const onViewCpassword = () => {
    if (seeCpassword === 'password') {
      setSeeCpassword('text');
    } else {
      setSeeCpassword('password');
    }
  };
  useEffect(() => {
    if (error) {
      setPasserr(false);
    }
  }, [error]);
  return (
    <main className="bg-white relative">
      <img
        className="hidden lg:block absolute left-0"
        src={Hero}
        alt="Happy GAP Finance users"
      />
      <Navbar />
      <section className="h-[90vh] pt-[100px] lg:pt-[200px] relative flex flex-col lg:flex-row items-center gap-[100px] lg:gap-[200px] pb-40 ">
        <div className="lg:w-[30%] relative lg:text-white text-center hidden md:block">
          <div className="px-20">
            <h1 className="text-[3rem] font-bold">Welcome To GAP finance!</h1>
            <p className="text-[1.5rem]">
              To keep exploring with us, please create your password.
            </p>
          </div>
        </div>
        <div className="mx-auto lg:mx-0 lg:w-[40%] flex items-center gap-[100px]">
          <div className="lg:w-[600px] login-box py-[1%] lg:px-[2%]">
            <div className="grid place-items-center mb-8">
              <img src={LogoDark} alt="Brand icon" />
            </div>
            <h3 className="text-[2rem] font-bold mb-4">Create your password</h3>

            <div>
              <form className="flex flex-col mb-4" onSubmit={onFormSubmit}>
                {error && <p className="text-red-600">Invalid credentials</p>}
                {passErr && <p className="text-red-600">Invalid credentials</p>}
                <div className="flex flex-col gap-4 mb-4">
                  <label htmlFor="email" className="font-bold">
                    Your Password <span className="text-red-600">*</span>
                  </label>
                  <div className="flex items-center px-2 form">
                    <FaUserLock />
                    <input
                      type={seePassword}
                      required
                      placeholder="*********"
                      className="flex-1 border-none bg-transparent rounded-md p-2 focus:outline-none"
                      value={password}
                      onChange={(e) => setPassword(e.target.value.trim())}
                    />
                    <button type="button" onClick={onViewPassword}>
                      {seePassword === 'password' ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="email" className="font-bold">
                    Confirm Password <span className="text-red-600">*</span>
                  </label>
                  <div className="flex items-center px-2 form">
                    <FaUserLock />
                    <input
                      type={seeCpassword}
                      required
                      placeholder="*********"
                      className="flex-1 border-none bg-transparent rounded-md p-2 focus:outline-none"
                      value={cpassword}
                      onChange={(e) => setCpassword(e.target.value.trim())}
                    />
                    <button type="button" onClick={onViewCpassword}>
                      {seeCpassword === 'password' ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>
                <button
                  disabled={loading}
                  className="bg-[#8E062E] py-2 text-white font-semibold mt-8 rounded-md hover:opacity-70 transition-all duration-300 ease-linear"
                >
                  Submit
                </button>
              </form>
              <p className="text-center">
                Go back{' '}
                <Link className="text-[#8E062E]" to="/">
                  Home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SetPassword;
