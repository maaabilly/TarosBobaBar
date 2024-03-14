import { useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import NavLogo from './NavLogo';
import { navigation } from '../constants';
import Button from './Button';

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
    nav;
  };

  const handleClick = () => {
    if (!nav) return;

    setNav(!nav);
    enablePageScroll();
  };

  return (
    <>
      <div className="flex justify-between sticky top-0 z-50 items-center h-20 max-w-[1240px] mx-auto px-4 text-slate-800 bg-[#f9f9f9]">
        <NavLogo />
        <ul
          className={`hidden w-[40%] md:grid md:grid-cols-4 gap-8 md:m-0 text-nowrap`}
        >
          {navigation.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="text-md hover:text-violet-700  hover:font-bold transition-all flex justify-center"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <Button style="primary" className="hidden md:block w-[150px] ">
          Ask for a quote
        </Button>

        <div
          onClick={toggleNav}
          className="block md:hidden z-10 fixed top-5 right-5 cursor-pointer"
        >
          {nav ? <LuX size={35} /> : <LuMenu size={35} />}
        </div>

        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-full h-full border-r border-r-gray-900 bg-gray-100 ease-in-out duration-500 md:hidden'
              : 'fixed left-0 top-[-100%] ease-in-out duration-500 w-full h-full md:hidden'
          }
        >
          <h1 className="w-full text-3xl font-bold flex justify-center mt-10">
            <a href="#home">TarosBobaBar</a>
          </h1>
          <ul className="uppercase p-4 flex flex-col items-center justify-evenly h-[70%]">
            {navigation.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={handleClick}
                  className="p-4 text-xl hover:tracking-wider transition-all duration-100"
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={handleClick}
                className="p-4 text-xl hover:tracking-wider transition-all duration-100"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
