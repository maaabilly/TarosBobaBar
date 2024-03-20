import { LuInstagram, LuMapPin, LuPhone, LuMail } from 'react-icons/lu';
import { FaYelp } from 'react-icons/fa';

import { textLogo } from '../assets';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full flex flex-col mx-auto py-8 px-4 text-gray-800/85 footer-gradient">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 max-w-[1000px] px-10 mx-auto">
        <img src={textLogo} alt="tarosbobabar logo" width={100} />

        <div className="flex flex-col justify-center items-center gap-2 font-semibold tracking-wide mb-5">
          <div className="flex gap-2 ">
            <LuMapPin size={20} />
            San Jose, CA
          </div>
          <div className="flex gap-2 justify-center items-center">
            <LuPhone size={20} />
            (669) 900-2573
          </div>
          <div className="flex gap-2 justify-center items-center">
            <LuMail size={20} />
            tarosbobabar@gmail.com
          </div>
        </div>

        <div className="flex gap-20 md:gap-5">
          <a
            href="https://www.instagram.com/tarosbobabar/"
            target="_blank"
            className="cursor-pointer transition-all  hover:text-color-brightPink/60 hover:scale-125"
          >
            <LuInstagram size={40} />
          </a>
          <a
            href="https://www.yelp.com/biz/taro-s-mobile-boba-bar-san-jose"
            target="_blank"
            className="cursor-pointer transition-all  hover:text-color-brightPink/60 hover:scale-125"
          >
            <FaYelp size={40} />
          </a>
        </div>
      </div>

      <p className="mx-auto mt-8 md:mt-4 text-gray-600">
        Copyright &copy; {currentYear} TarosBobaBar. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
