import { useRef } from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { FaArrowRight, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <nav className="bg-[#8e062e] py-4 relative z-40 px-2 lg:px-0">
      <div className=" lg:px-[5%] flex justify-between items-center text-white font-bold">
        <div>
          <Link to="/">
            <img src={Logo} alt="GAP  finance logo" className="w-[150px]" />
          </Link>
        </div>
        <div className="block lg:hidden">
          <Button ref={btnRef} colorScheme="yellow" onClick={onOpen}>
            <FaBars color="white" />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <div className="bg-[#8e062e] h-full py-10 relative">
                <DrawerCloseButton />
                <DrawerHeader>
                  <div>
                    <img src={Logo} alt="GAP  finance logo" />
                  </div>
                </DrawerHeader>

                <DrawerBody>
                  <div>
                    <ul className="flex flex-col gap-10 items-center text-white font-bold">
                      <li className="hover:animate-pulse">
                        <Link to="/">Products</Link>
                      </li>
                      <li className="hover:animate-pulse">
                        <Link to="/">About Us</Link>
                      </li>
                      <li className="hover:animate-pulse">
                        <Link to="/">Blog</Link>
                      </li>
                      <li className="hover:animate-pulse">
                        <Link to="/">Support</Link>
                      </li>
                    </ul>
                  </div>
                </DrawerBody>

                <DrawerFooter>
                  <div className="flex justify-center items-center gap-2 absolute bottom-10">
                    <button className="signup flex gap-1 justify-center items-center text-black hover:opacity-60 font-bold">
                      <Link to="/login">Sign In</Link>
                      <FaArrowRight />
                    </button>
                    <button className="signup flex gap-1 justify-center items-center text-black hover:opacity-60 font-bold">
                      <Link to="/register">Sign Up</Link>
                      <FaArrowRight />
                    </button>
                  </div>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-10 items-center">
            <li className="hover:animate-pulse">
              <Link to="/">Products</Link>
            </li>
            <li className="hover:animate-pulse">
              <Link to="/">About Us</Link>
            </li>
            <li className="hover:animate-pulse">
              <Link to="/">Blog</Link>
            </li>
            <li className="hover:animate-pulse">
              <Link to="/">Support</Link>
            </li>
            <li className="hover:animate-pulse">
              <Link to="/login">Sign In</Link>
            </li>
            <li className="signup flex gap-1 justify-center items-center text-black hover:opacity-60">
              <Link to="/register">Sign Up</Link>
              <FaArrowRight />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
