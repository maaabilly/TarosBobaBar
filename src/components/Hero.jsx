import { ReactTyped } from 'react-typed';
import { hero } from '../constants';
import { heroBg2 } from '../assets';
import Button from './Button';

const Hero = () => {
  return (
    <div className=" w-full mx-auto" id="hero">
      <div className="absolute w-full h-screen md:h-[80vh] z-10 px-8 bg-hero lg:bg-cover bg-cover bg-bottom bg-no-repeat ">
        <div className=" text-gray-800 md:mx-[10%] mt-[60%] sm:mt-[35%] md:mt-[25%] lg:mt-[20%] xl:ml-[10%]">
          <p className="text-2xl tracking-wide font-semibold md:ml-[-30px] mb-[2rem]">
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
          <div className="mt-[3rem] sm:mt-0 flex justify-center sm:justify-start">
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
        alt="Boba Milk Tea Display"
        className=" w-full h-screen md:h-[75vh] object-cover mt-[-70px]"
      />
    </div>
  );
};

export default Hero;
