import { tbbTshirt } from '../assets';
import { about } from '../constants';

const About = () => {
  return (
    <div
      className="w-full pt-10 lg:pb-[10rem] pb-[5rem] bg-outline-wave lg:bg-cover bg-contain bg-bottom bg-no-repeat"
      id="about"
    >
      <div className="max-w-[1240px] mx-auto px-4 flex flex-col lg:flex-row justify-center items-center">
        <div className="flex justify-center px-2 overflow-hidden">
          <img
            src={tbbTshirt}
            alt="Boba catering private event"
            className="mx-20 my-10 rounded-[10%] object-cover w-[500px] h-[400px] md:w-[500px] md:h-[500px] "
          />
        </div>

        <div className="flex flex-col justify-center items-center px-5 lg:items-start ">
          <p className="text-slate-700 uppercase font-bold">
            {about.subheading}
          </p>
          <h2 className="md:text-5xl sm:text-4xl text-3xl font-bold mb-5 playfair">
            {about.heading}
          </h2>
          <h3 className="text-slate-700 max-w-[800px] mb-10 md:text-xl">
            {about.content}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
