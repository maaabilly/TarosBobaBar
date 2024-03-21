import { ReactTyped } from 'react-typed';
import { hero } from '../constants';
import { heroBg2 } from '../assets';
import Button from './Button';

const Hero = () => {
  return (
    <div className=" w-full mx-auto" id="hero">
      <div className="absolute w-full h-screen landscape:h-[700px] z-10 px-10 bg-hero lg:bg-cover bg-cover bg-bottom bg-no-repeat">
        <div className="md:mx-[10%] mt-[10rem] md:mt-[rem] lg:ml-[15%] text-gray-800 ">
          <p className="text-2xl tracking-wide font-semibold md:ml-[-30px] mb-[1rem]">
            {hero.subheading2}
          </p>
          <div className="flex justify-start items-start h-[150px]">
            <h1 className={hero.reactTyped.classes}>
              Book us for <br className="block md:hidden" />
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
          <div className="mt-[5rem] sm:mt-0 flex justify-center sm:justify-start">
            <Button
              style="primary"
              href="https://tarosbobabar.paperform.co"
              className="md:hidden  w-[200px] h-[55px] text-xl"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
      <img
        src={heroBg2}
        alt="hero image"
        className=" w-full h-screen landscape:h-[690px] object-cover 2xl:object-contain mt-[-70px]"
      />
    </div>
  );
};

export default Hero;
