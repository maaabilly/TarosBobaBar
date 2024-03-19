// import { useState } from 'react';
import { Tabs, Tab } from './Tabs';
import Button from './Button';
import { barista, delivery } from '../assets';
import { LuCheck, LuBadgeCheck } from 'react-icons/lu';

const Pricing = () => {
  return (
    <div className="w-full py-[6rem] px-4 bg-gray-100" id="services">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-slate-700 text-center uppercase font-bold">
          How may we serve you?
        </p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl text-center font-bold mt-2 mb-[2.5rem]">
          Our Services
        </h1>
      </div>
      <Tabs>
        <Tab label="On Site Barista">
          <div className="py-4">
            <h2 className="text-2xl md:text-3xl text-center mb-5">
              Premium On Site Barista
            </h2>
            <div className="flex flex-col md:flex-row items-center mb-8 p-8 rounded-3xl overflow-hidden xl:h-[46rem] bg-violet-200 ring-[3px] ring-violet-400">
              <div className="flex-1 mb-4 md:mb-0">
                <img src={barista} alt="barista" className="rounded-3xl" />
              </div>
              <div className="flex justify-start flex-col flex-1 w-full pl-2 md:pl-10">
                <div className="flex justify-start text-5xl md:text-6xl my-4">
                  <span className="mt-2 text-2xl md:text-3xl">$</span>300{' '}
                  <span className="ml-2 self-end text-2xl md:text-3xl">
                    /hour
                  </span>
                </div>
                <ul className="flex flex-col gap-3 text-[1.2rem] mb-4">
                  <li className="flex items-center gap-5">
                    <LuBadgeCheck size={25} /> Minimum 4 Hours Service
                  </li>
                </ul>
                <p className="">
                  We will have on site baristas making drinks to order! Your
                  guests will enjoy endless possibilities for tea flavor and
                  topping combinations!
                </p>
              </div>
            </div>
          </div>
        </Tab>
        <Tab label="Self Serve Station">
          <div className="py-4">
            <h2 className="text-lg text-center text-[1.5rem] mb-5">
              Self Serve Boba Station
            </h2>
            <div className="flex flex-col md:flex-row items-center mb-8 p-8 rounded-3xl overflow-hidden xl:h-[46rem] bg-violet-200 ring-[3px] ring-violet-400">
              <div className="flex-1">
                <img src={barista} alt="barista" className="rounded-3xl" />
              </div>
              <div className="flex justify-start flex-col flex-1 w-full pl-2 md:pl-10">
                <h2 className="mt-4 mb-2 text-2xl">Premium On Site Barista</h2>
                <p className="pb-4">
                  Includes the Full Service On-Site plus additional features
                  like a wider selection of flavors and customization options.
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
        </Tab>
        <Tab label="Delivery Drop Off">
          <div className="py-4">
            <h2 className="text-2xl md:text-3xl text-center mb-5">
              Pre-packaged Boba Delivery
            </h2>
            <div className="flex flex-col md:flex-row items-center mb-8 p-8 rounded-3xl overflow-hidden xl:h-[46rem] bg-violet-200 ring-[3px] ring-violet-400">
              <div className="flex-1 mb-4 md:mb-0">
                <img
                  src={delivery}
                  alt="barista"
                  className="rounded-3xl aspect-square"
                />
              </div>
              <div className="flex justify-start flex-col flex-1 w-full pl-2 md:pl-10">
                <div className="flex justify-start text-5xl md:text-6xl my-4">
                  <span className="mt-2 text-2xl md:text-3xl">$</span>6{' '}
                  <span className="ml-2 self-end text-2xl md:text-3xl">
                    /drink
                  </span>
                </div>
                <ul className="flex flex-col gap-3 text-lg mb-4">
                  <li className="flex items-center gap-5">
                    <LuBadgeCheck size={25} /> Additional 50&cent; for
                    Toppings
                  </li>
                  <li className="flex items-center gap-5">
                    <LuBadgeCheck size={25} />30 Drinks Minimum Order
                  </li>
                  <li className="flex items-center gap-5">
                    <LuBadgeCheck size={25} />Free Delivery for 50+ Drinks
                  </li>
                  <li className="flex items-center gap-5">
                    <LuBadgeCheck size={25} />$50 Delivery Fee Otherwise
                  </li>
                </ul>
    
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
      <div className="w-full flex justify-center">
        <Button
          style="primary"
          href="https://tarosbobabar.paperform.co"
          className="md:w-[180px] w-[150px]"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Pricing;
