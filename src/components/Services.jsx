import { barista, bottomWave } from '../assets';
import { LuCheck } from 'react-icons/lu';

const Services = () => {
  return (
    <div className="w-full py-[6rem]" id="services">
      <div className=" max-w-[1240px] mx-auto z-10">
        <div className="mx-10 flex flex-col justify-center">
          <p className="text-slate-700 text-center uppercase font-bold">
            How may we serve you?
          </p>
          <h2 className="md:text-4xl sm:text-3xl text-2xl text-center font-bold mt-2 mb-[2.5rem]">
            Our Services
          </h2>
          <div className="flex flex-col md:flex-row items-center mb-8 p-8 rounded-3xl overflow-hidden xl:h-[46rem] bg-violet-200 ring-[3px] ring-violet-400">
            <div className="flex-1">
              <img src={barista} alt="barista" className="rounded-3xl" />
            </div>
            <div className="flex justify-start flex-col flex-1 w-full pl-2 md:pl-10">
              <h2 className="mt-4 mb-2 text-2xl">Premium On Site Barista</h2>
              <p className="pb-4">
                Includes the Full Service On-Site plus additional features like
                a wider selection of flavors and customization options.
              </p>
              <ul className="flex flex-col">
                <li className="flex items-center gap-5">
                  <LuCheck /> List item 1
                </li>
                <li className="flex items-center gap-5">
                  <LuCheck /> List item 1
                </li>
                <li className="flex items-center gap-5">
                  <LuCheck /> List item 1
                </li>
                <li className="flex items-center gap-5">
                  <LuCheck /> List item 1
                </li>
                <li className="flex items-center gap-5">
                  <LuCheck /> List item 1
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mx-10 justify-center gap-5 md:gap-10">
          <div className="flex flex-col items-center mb-5 p-8 rounded-3xl overflow-hidden xl:h-[46rem] bg-violet-200 ring-[3px] ring-violet-400">
            <div className="">
              <img src={barista} alt="barista" className="rounded-3xl" />
            </div>
            <div className="flex justify-start flex-col flex-1 w-full pl-2">
              <h2 className="mt-10 mb-2 text-2xl">Self Serve Boba Station</h2>
              <p className="my-2">
                Our team will set up a self-serve boba tea station at your
                event.
              </p>
              <ul className="flex flex-col justify-end h-full">
                <li className="flex items-center gap-5">
                  <LuCheck /> List item 1
                </li>
                <li className="flex items-center gap-5">
                  <LuCheck /> List item 1
                </li>
                <li className="flex items-center gap-5">
                  <LuCheck /> List item 1
                </li>
                <li className="flex items-center gap-5">
                  <LuCheck /> List item 1
                </li>
                <li className="flex items-center gap-5">
                  <LuCheck /> List item 1
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center mb-5 p-8 rounded-3xl overflow-hidden xl:h-[46rem] bg-violet-200 ring-[3px] ring-violet-400">
            <div className="">
              <img src={barista} alt="barista" className="rounded-3xl" />
            </div>
            <div className="flex justify-start flex-col flex-1 w-full pl-2">
              <h2 className="mt-10 mb-2 text-2xl">Delivery Drop Off</h2>
              <p className="pb-4">
                We prepare and seal the drinks at our location and deliver them
                to your event. All you have to do is serve them.
              </p>
              <ul className="flex flex-col">
                <li className="flex items-center gap-5">
                  <LuCheck /> List item 1
                </li>
                <li className="flex items-center gap-5">
                  <LuCheck /> List item 1
                </li>
                <li className="flex items-center gap-5">
                  <LuCheck /> List item 1
                </li>
                <li className="flex items-center gap-5">
                  <LuCheck /> List item 1
                </li>
                <li className="flex items-center gap-5">
                  <LuCheck /> List item 1
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img
        src={bottomWave}
        alt="bg"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Services;
