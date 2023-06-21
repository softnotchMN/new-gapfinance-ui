import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
const Footer = () => {
  return (
    <footer className="bg-[#8e062e] py-[5%] px-[8px] lg:px-0">
      <div className="lg:max-w-[1140px] mx-auto md:flex gap-16">
        <div className="text-white md:w-[50%] mb-10 lg:mb-0">
          <div className="w-max">
            <img src={Logo} alt="logo light" className="w-[150px]" />
          </div>
          <div className="mt-2">
            <p className="text-[#9ba7b3]">
              We are a financial services company led by individuals with over
              35years collective investment banking, Corporate finance, retail
              banking & financial technology experience, working to provide
              tailored financial solutions to both private individuals and
              businesses.
            </p>
            <ul className="list-inline mb-0 footer-social-link">
              <li className="list-inline-item">
                <Link to="#!" className="avatar-xs d-block">
                  <div className="avatar-title rounded-circle">
                    <i className="ri-facebook-fill"></i>
                  </div>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#!" className="avatar-xs d-block">
                  <div className="avatar-title rounded-circle">
                    <i className="ri-github-fill"></i>
                  </div>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#!" className="avatar-xs d-block">
                  <div className="avatar-title rounded-circle">
                    <i className="ri-linkedin-fill"></i>
                  </div>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#!" className="avatar-xs d-block">
                  <div className="avatar-title rounded-circle">
                    <i className="ri-google-fill"></i>
                  </div>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#!" className="avatar-xs d-block">
                  <div className="avatar-title rounded-circle">
                    <i className="ri-dribbble-line"></i>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-[50%] flex justify-between items-start mb-10 lg:mb-0">
          <div className="mt-3">
            <h5 className="text-white mb-0">Company</h5>
            <ul className="text-[#9ba7b3]">
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Our Vision</Link>
              </li>
              <li>
                <Link to="#">Our Mission</Link>
              </li>
            </ul>
          </div>
          <div className="mt-3">
            <h5 className="text-white mb-0">Personal</h5>
            <ul className="text-[#9ba7b3]">
              <li>
                <Link to="#">Account opening</Link>
              </li>
              <li>
                <Link to="#">Savings</Link>
              </li>
              <li>
                <Link to="#">Bills Payments</Link>
              </li>
              <li>
                <Link to="#">Expense tracker</Link>
              </li>
              <li>
                <Link to="#">Loans</Link>
              </li>
              <li>
                <Link to="#">Investment</Link>
              </li>
              <li>
                <Link to="#">Buy now Pay later</Link>
              </li>
            </ul>
          </div>
          <div className="mt-3">
            <h5 className="text-white mb-0">Business</h5>
            <ul className="text-[#9ba7b3]">
              <li>
                <Link to="#">Business loans</Link>
              </li>
              <li>
                <Link to="#">Funds transfer</Link>
              </li>
              <li>
                <Link to="#">Inventory</Link>
              </li>
              <li>
                <Link to="#">Invoice generation</Link>
              </li>
              <li>
                <Link to="#">Bookkeping</Link>
              </li>
              <li>
                <Link to="#">Investment</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto">
        <p className="text-[#9ba7b3]">
          © {new Date().getFullYear()} GAP Finance. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
