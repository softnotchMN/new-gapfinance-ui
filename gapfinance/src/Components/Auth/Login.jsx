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
import { loginUser } from '../../features/auth';
import LogoDark from '../../assets/login.png';
import Hero from '../../assets/bg.png';
import Navbar from '../Landing/Navbar';

const Login = () => {
  document.title = 'GAP Finance | Signin';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState('password');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, isLoggedIn, error, errorMsg } = useSelector(
    (state) => state.auth
  );
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/authorize');
    }
  }, [dispatch, isLoggedIn, error, navigate]);
  // useEffect(() => {
  //   if (error) {
  //     const timeOut = setTimeout(() => {
  //       dispatch(resetError());
  //     }, 3000);
  //     return () => clearTimeout(timeOut);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [error]);

  const onViewPassword = () => {
    if (seePassword === 'password') {
      setSeePassword('text');
    } else {
      setSeePassword('password');
    }
  };
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
            <h1 className="text-[3rem] font-bold">Welcome Back!</h1>
            <p className="text-[1.5rem]">
              To keep exploring with us, please login with your personal
              information
            </p>
          </div>
        </div>
        <div className="mx-auto lg:mx-0 lg:w-[40%] flex items-center gap-[100px]">
          <div className="lg:w-[600px] login-box py-[1%] lg:px-[2%]">
            <div className="grid place-items-center mb-8">
              <img src={LogoDark} alt="Brand icon" />
            </div>
            <h3 className="text-[2rem] font-bold mb-4">
              Sign in to GAP Finance
            </h3>
            <p className="text-[1.2rem] font-semibold mb-[40px]">
              New to Gap Finance?{' '}
              <Link to="/register" className="text-[#8E062E]">
                Create an account
              </Link>
            </p>
            <div>
              <form className="flex flex-col mb-4" onSubmit={onFormSubmit}>
                {error && <p className="text-red-600">Invalid credentials</p>}
                <div className="flex flex-col gap-4 mb-4">
                  <label htmlFor="email" className="font-bold">
                    Your Email <span className="text-red-600">*</span>
                  </label>
                  <div className="flex items-center px-2 form">
                    <FaMailBulk />
                    <input
                      type="email"
                      placeholder="example@email.com"
                      required
                      className="h-[54px] bg-transparent focus:outline-none p-2 flex-1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value.trim())}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
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
                <button className="bg-[#8E062E] py-2 text-white font-semibold mt-8 rounded-md hover:opacity-70 transition-all duration-300 ease-linear">
                  Sign In
                </button>
              </form>
              <p className="text-center">
                Forgot password?{' '}
                <Link className="text-[#8E062E]" to="/">
                  Reset now!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
