import { LuInstagram } from 'react-icons/lu';
import { FaYelp } from 'react-icons/fa';

import { textLogo } from '../assets';

const Footer = () => {
  return (
    <div className="w-full flex flex-col mx-auto py-8 px-4 text-gray-700/90 footer-gradient">
      <div className="w-full flex justify-between items-center gap-2 max-w-[1000px] px-10 mx-auto">
        <img src={textLogo} alt="tarosbobabar logo" width={100}/>
        <div className="flex gap-6">
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
      <p className='mx-auto mt-4'>Copyright &copy; 2024 TarosBobaBar. All rights reserved.</p>
    </div>
  );
};

export default Footer;
