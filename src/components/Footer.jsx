import { LuInstagram, LuFacebook } from 'react-icons/lu';
import { FaYelp } from 'react-icons/fa';

import { textLogo } from '../assets';

const Footer = () => {
  return (
    <div className="w-full mx-auto py-16 px-4 text-gray-700 bg-violet-700/80">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row max-w-[1000px] mx-auto">
        <img src={textLogo} alt="tarosbobabar logo" width={100} height={100} />
        <div className="flex w-full justify-evenly">
          <LuInstagram size={30} />
          <LuFacebook size={30} />
          <FaYelp size={30} />
        </div>
        <p>Copyright &copy; 2024 TarosBobaBar. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
