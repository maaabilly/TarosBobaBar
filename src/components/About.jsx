import { cupWithLogo, groupCheers } from '../assets';
import { about } from '../constants';

const About = () => {
  return (
    <div
      className="w-full pt-10 lg:pb-[10rem] pb-[5rem] bg-outline-wave lg:bg-cover bg-contain bg-bottom bg-no-repeat"
      id="about"
    >
      <div className="max-w-[1240px] mx-auto px-4 flex flex-col lg:flex-row justify-center items-center">
        <div className="flex justify-center px-10 overflow-hidden">
          <img
            src={cupWithLogo}
            alt="Boba catering private event"
            className="neumorphism mx-20 my-10 rounded-[20%] object-cover w-[400px] h-[400px] md:w-[500px] md:h-[500px] "
            width={500}
            height={500}
          />
        </div>

        <div className="flex flex-col justify-center items-center px-10 lg:items-start ">
          <p className="text-slate-700 uppercase font-bold">
            {about.subheading}
          </p>
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold mt-2 mb-4 playfair">
            {about.heading}
          </h2>
          <h3 className="text-slate-700 max-w-[700px] mb-10 text-lg md:text-xl">
            {about.content}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
