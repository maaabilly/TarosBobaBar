import { useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import NavLogo from './NavLogo';
import { navigation } from '../constants';
import Button from './Button';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    if (nav) {
      setNav(false);
      enablePageScroll();
    } else {
      setNav(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!nav) return;

    setNav(!nav);
    enablePageScroll();
  };

  return (
    <div className=" sticky top-0 z-50  px-4 text-slate-800 bg-[#f9f9f9] shadow">
      <div className="max-w-[1240px] flex justify-between items-center h-20  mx-auto">
        <NavLogo className={`ml-5`} />
        <ul
          className={`hidden w-[40%] md:grid md:grid-cols-3 gap-8 md:m-0 text-nowrap`}
        >
          {navigation.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                title={link.title}
                className="text-lg font-medium text-gray-800/90 hover:text-color-brightPink/80 hover:font-bold transition-all flex justify-center"
              >
                {link.title}
              </a>
            </li>
          ))}
          {/* <Link
            to="/menu"
            target="_blank"
            className="text-lg font-medium text-gray-800/90 hover:text-color-brightPink/80 hover:font-bold transition-all flex justify-center"
          >
            Menu
          </Link> */}
          <a
            href="https://tarosbobabar.netlify.app/menu"
            target="_blank"
            title="Menu"
            className="text-lg font-medium text-gray-800/90 hover:text-color-brightPink/80 hover:font-bold transition-all flex justify-center"
          >
            Menu
          </a>
        </ul>
        <Button
          style="primary"
          className="hidden md:block w-[150px] mr-5"
          href="https://tarosbobabar.paperform.co"
        >
          Book Now
        </Button>
        <div
          onClick={toggleNav}
          className="block md:hidden z-10 fixed top-5 right-5 cursor-pointer landscape:hidden"
        >
          {nav ? <LuX size={35} /> : <LuMenu size={35} />}
        </div>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-full h-full border-r border-r-gray-900 bg-gray-100 ease-in-out duration-500 md:hidden landscape:hidden'
              : 'fixed left-0 top-[-100%] landscape:hidden ease-in-out duration-500 w-full h-full md:hidden'
          }
        >
          <NavLogo className={`mt-10`} />
          <ul className="uppercase p-4 mt-10 flex flex-col items-center justify-evenly h-[80%]">
            {navigation.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={handleClick}
                  title={link.title}
                  className="p-4 text-[1.5rem] hover:text-color-brightPink/75 hover:font-bold hover:tracking-wider transition-all duration-100"
                >
                  {link.title}
                </a>
              </li>
            ))}
            {/* <Link
              to="/menu"
              target="_blank"
              className=" text-[1.5rem] hover:text-color-brightPink/75 hover:font-bold hover:tracking-wider transition-all duration-100 mb-10"
            >
              Menu
            </Link> */}
            <a
              href="https://tarosbobabar.netlify.app/menu"
              target="_blank"
              title="Menu"
              className=" text-[1.5rem] hover:text-color-brightPink/75 hover:font-bold hover:tracking-wider transition-all duration-100 mb-10"
            >
              Menu
            </a>
            <Button
              style="primary"
              className="w-[150px]"
              href="https://tarosbobabar.paperform.co"
            >
              Book Now
            </Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
