import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authorize } from '../../features/auth';
import LogoDark from '../../assets/login.png';
import Navbar from '../Landing/Navbar';

export default function Authorize() {
  document.title = 'Authorize login';

  const [otp, setOtp] = useState('');

  const dispatch = useDispatch();
  const history = useNavigate();

  const { error, errorMsg, user, isAuthorized, loading } = useSelector(
    (state) => state.auth
  );

  const onFormSubmit = (e) => {
    e.preventDefault();
    const otpNum = parseInt(otp.trim());
    if (!otpNum) {
      return;
    }
    dispatch(authorize({ email: user?.email, otp: otpNum }));
  };

  useEffect(() => {
    if (isAuthorized) {
      history('/dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthorized]);
  useEffect(() => {
    if (error) {
      const timeOut = setTimeout(() => {
        dispatch(resetError());
      }, 3000);
      return () => clearTimeout(timeOut);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  return (
    <>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mt-[100px] grid place-items-center">
            <Link to="/">
              <img
                src={LogoDark}
                alt="Brand icon"
                width="100"
                height="58"
                style={{ objectFit: 'cover' }}
              />
            </Link>
            <p className="mt-3">GapFinance, the best experience</p>
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Authorize Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onFormSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-[#640421] "
              >
                Enter OTP
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.trim())}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#640421] sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#8e062e] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#640421] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[bg-[#640421] "
              >
                Confirm
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Didn't get the mail?{' '}
            <a
              href="#"
              className="font-semibold leading-6 text-[#8e062e] hover:text-[#640421] "
            >
              Try again
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
