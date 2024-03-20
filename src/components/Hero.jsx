import { ReactTyped } from 'react-typed';
import { hero } from '../constants';
import { heroBg } from '../assets';
import Button from './Button';

const Hero = () => {
  return (
    <div className=" w-full mx-auto" id="hero">
      <div className="absolute w-full h-screen z-10 px-10 bg-hero lg:bg-cover bg-contain bg-bottom bg-no-repeat ">
        <div className="md:mx-[10%] md:mt-[20rem] mt-[15rem] lg:ml-[15%] text-gray-800 ">
          <p className="lg:text-3xl sm:text-2xl text-xl font-medium mb-4 md:ml-[-30px]">
            {hero.subheading2}
          </p>
          <div className="flex justify-start items-center">
            <h1 className={hero.reactTyped.classes}>
              Book us for your <br />
              next{' '}
              <ReactTyped
                className={hero.reactTyped.classes}
                strings={hero.reactTyped.strings}
                typeSpeed={70}
                backSpeed={50}
                loop
                showCursor={false}
              />
            </h1>
          </div>
          <div className="sm:mt-14 mt-16 ">
            <Button
              style="primary"
              href="https://tarosbobabar.paperform.co"
              className="md:hidden md:w-[180px] w-[150px] "
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
      <img
        src={heroBg}
        alt="hero image"
        className=" w-full h-screen object-cover mt-[-80px]"
      />
    </div>
  );
};

export default Hero;
