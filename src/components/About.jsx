import { groupCheers } from '../assets';
import { about } from '../constants';
import Button from './Button';

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4" id="about">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row justify-center items-center">
        <img
          src={groupCheers}
          alt="boba is life"
          className="rounded-[100%] px-10 mb-10"
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-center items-center px-10 lg:items-start ">
          <p className="text-slate-700 uppercase font-bold">
            {about.subheading}
          </p>
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold mt-2 mb-4">
            {about.heading}
          </h2>
          <p className="text-slate-700 max-w-[700px] mb-5">{about.content}</p>
          <Button
            style="secondary"
            href="/menu"
            className="md:hidden w-[150px]"
          >
            View Menu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
