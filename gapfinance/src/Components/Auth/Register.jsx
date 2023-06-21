import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import LogoDark from '../../assets/hero.png';
import Linked from '../../assets/link.png';
import fb from '../../assets/fb.png';
import G from '../../assets/g.png';
import { registerUser, resetError } from '../../features/auth';

// import { registerUser, resetError } from '../../store/features/auth';

//redux

//import images
import Navbar from '../Landing/Navbar';

const Register = () => {
  const [business, setBusinessName] = useState('');
  const [accountType, setAccountType] = useState('');
  const [accountCategory, setAccountCategory] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isBusiness, setIsBusiness] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formErrorMsg, setFormErrorMsg] = useState('');

  const { error, errorMsg, success } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const history = useNavigate();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (accountCategory === 'personal') {
      dispatch(registerUser({ email, accountType, accountCategory }));
      return;
    }
    dispatch(
      registerUser({
        email,
        accountType,
        accountCategory,
        businessName: business,
      })
    );
  };
  useEffect(() => {
    dispatch(resetError());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (accountCategory === 'business') {
      setIsBusiness(true);
    } else {
      setIsBusiness(false);
    }
  }, [accountCategory]);

  useEffect(() => {
    if (success) {
      history('/activate');
    }

    // setTimeout(() => {
    //   dispatch(resetRegisterFlag());
    // }, 3000);
  }, [dispatch, success, history]);

  document.title = 'SignUp on GAP Finance';

  return (
    <React.Fragment>
      <main className="bg-white">
        <Navbar />
        <section className="h-[90vh] flex flex-col lg:flex-row items-center gap-[50px] lg:gap-[200px]">
          <div className="lg:w-[40%]">
            <img
              className="w-[600px]"
              src={LogoDark}
              alt="Happy GAP Finance users"
            />
          </div>
          <div className="mx-auto lg:mx-0 lg:w-[50%] flex items-center gap-[100px]">
            <div className="lg:w-[600px] py-[1%] px-[2%]">
              <h3 className="text-[1.5rem] lg:text-[2rem] font-bold mb-4">
                Create a new GAP Finance account
              </h3>
              <div className="flex justify-center gap-6 mb-4">
                <img src={Linked} alt="" />
                <img src={fb} alt="" />
                <img src={G} alt="" />
              </div>
              <p className="text-center mb-10 text-[1.5rem] font-medium">
                Or <strong>register</strong> with email
              </p>
              <div>
                <form className="flex flex-col mb-4" onSubmit={onFormSubmit}>
                  {errorMsg && errorMsg.length ? (
                    errorMsg.map((err) => (
                      <p className="text-red-600 capitalize" key={err}>
                        {err}
                      </p>
                    ))
                  ) : (
                    <p className="text-red-600">{errorMsg}</p>
                  )}
                  <div className="flex items-center mb-4 form">
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email"
                      required
                      className="h-[54px] bg-transparent border-none focus:outline-none p-2 rounded-md w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value.trim())}
                    />
                  </div>
                  <div className="flex items-center mb-4 form">
                    <select
                      value={accountCategory}
                      onChange={(e) => setAccountCategory(e.target.value)}
                      className="bg-transparent w-[100%]  border-none focus:outline-none p-2 rounded-md"
                    >
                      <option value="">Account Category</option>
                      <option value="personal">Personal</option>
                      <option value="business">Business</option>
                    </select>
                  </div>
                  <div className="flex items-center mb-4 form">
                    <select
                      value={accountType}
                      onChange={(e) => setAccountType(e.target.value)}
                      className="h-[54px] bg-transparent w-[100%] border-none focus:outline-none p-2 rounded-md"
                    >
                      <option value="">Account Type</option>
                      <option value="savings">Savings</option>
                      <option value="current">Current</option>
                    </select>
                  </div>
                  {isBusiness && (
                    <div className="flex flex-col gap-4 form">
                      <div className="flex items-center h-[54px] bg-transparent focus:outline-none  px-2">
                        <input
                          type="text"
                          placeholder="Your business name"
                          className="flex-1 border-none bg-transparent rounded-md p-2 focus:outline-none w-full"
                          value={business}
                          onChange={(e) =>
                            setBusinessName(e.target.value.trim())
                          }
                        />
                      </div>
                    </div>
                  )}
                  <button className="bg-[#8e062e] py-2 rounded-md text-white font-semibold mt-8">
                    Register
                  </button>
                </form>
              </div>
              <p className="text-[1.2rem] font-semibold mb-[40px]">
                Already have an account?{' '}
                <Link to="/login" className="text-[#8e062e]">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Register;
