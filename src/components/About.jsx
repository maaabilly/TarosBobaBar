import { groupCheers } from '../assets';
import { about } from '../constants';

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4" id="about">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row justify-center items-center">
        <div className="flex justify-center px-10">
          <img
            src={groupCheers}
            alt="boba is life"
            className="neumorphism mx-20 my-10 rounded-[20%]"
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
          <h3 className="text-slate-700 max-w-[700px] mb-10">
            {about.content}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
