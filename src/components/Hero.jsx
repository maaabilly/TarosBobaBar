import { ReactTyped } from 'react-typed';
import { hero } from '../constants';
import { heroBg } from '../assets';
import Button from './Button';

const Hero = () => {
  return (
    <div className="w-full mx-auto" id="hero">
      <div className="absolute w-full h-screen flex flex-col justify-center items-start z-10 px-10 text-white ">
        <div className="md:mx-[10%] lg:ml-[15%]">
          <p className="text-white lg:text-xl text-lg">{hero.subheading}</p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:pb-2">
            {hero.title}
          </h1>
          <div className="flex justify-start items-center mb-3">
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
          <p className="md:text-2xl text-lg mt-4 text-left">
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
