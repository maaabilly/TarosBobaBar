import { ReactTyped } from 'react-typed';
import { hero } from '../constants';
import { heroBg } from '../assets';
import Button from './Button';

const Hero = () => {
  return (
    <div className="w-full mx-auto" id="hero">
      <div className="absolute w-full h-screen z-10 px-10 sm:mt-[10rem] mt-[13rem]">
        <div className="md:mx-[10%] lg:ml-[15%] text-gray-800">
          <p className="md:text-3xl sm:text-2xl text-xl  font-medium">
            {hero.subheading}
          </p>
          <div className="flex justify-start items-center my-5">
            <p className={hero.reactTyped.classes}>
              Book us for your <br />
              next{' '}
              <ReactTyped
                className={hero.reactTyped.classes}
                strings={hero.reactTyped.strings}
                typeSpeed={50}
                backSpeed={40}
                loop
                showCursor={false}
              />
            </p>
          </div>
          <p className="md:text-3xl sm:text-2xl text-xl mt-5 text-left">
            {hero.subheading2}
          </p>
          <Button
            style="primary"
            href="https://tarosbobabar.paperform.co"
            className="md:hidden md:w-[180px] w-[150px] mt-8"
          >
            Book Now
          </Button>
        </div>
      </div>

      <img
        src={heroBg}
        alt="Boba is lLife"
        className="w-full h-screen object-cover"
      />
    </div>
  );
};

export default Hero;
