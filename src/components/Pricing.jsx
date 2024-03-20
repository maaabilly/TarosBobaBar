// import { useState } from 'react';
import { Tabs, Tab } from './Tabs';
import Button from './Button';
import { barista, delivery, stand2 } from '../assets';
import { LuCheckCircle2 } from 'react-icons/lu';

const Pricing = () => {
  return (
    <div className="mx-auto max-w-[1240px] py-[6rem] px-4 " id="services">
      <div className=" mx-auto">
        <p className="text-slate-700 text-center uppercase font-bold">
          How may we serve you?
        </p>
        <h2 className="playfair md:text-4xl sm:text-3xl text-2xl text-center font-bold mt-2 mb-[2.5rem]">
          Our Services
        </h2>
      </div>
      <Tabs>
        <Tab label="On Site Barista">
          <div className="py-4">
            <div className="flex flex-col md:flex-row items-center mb-8 p-8 overflow-hidden neumorphism">
              <div className="flex-1 mb-4 md:mb-0 justify-center flex">
                <img src={barista} alt="barista" className="rounded-3xl" />
              </div>

              <div className="flex justify-start flex-col flex-1 px-10 pl-2 md:pl-10">
                <h4 className="hidden lg:block text-2xl md:text-3xl font-medium mb-2">
                  Premium On Site Barista
                </h4>
                <p className="text-2xl mt-2 ">Starting at</p>
                <div className="flex justify-start text-5xl md:text-6xl mb-4">
                  <span className="mt-2 text-2xl md:text-3xl">$</span>300{' '}
                  <span className="ml-2 self-end text-2xl md:text-3xl">
                    /hour
                  </span>
                </div>
                <ul className="flex flex-col gap-3 text-[1.2rem] mb-4">
                  <li className="flex items-center gap-5">
                    <LuCheckCircle2 size={25} /> Minimum 4 Hours Service
                  </li>
                </ul>
                <p className="text-lg md:text-xl">
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
            <div className="flex flex-col md:flex-row items-center mb-8 p-8 overflow-hidden neumorphism">
              <div className="flex-1 mb-4 md:mb-0">
                <img src={stand2} alt="barista" className="rounded-3xl" />
              </div>
              <div className="flex justify-start flex-col flex-1 w-full pl-2 md:pl-10">
                <h4 className="hidden lg:block text-2xl md:text-3xl font-medium mb-2">
                  Fully Equipped Self Serve Boba Station
                </h4>
                <p className="text-2xl mt-2 ">Starting at</p>
                <div className="flex justify-start text-5xl md:text-6xl mb-4">
                  <span className="mt-2 text-2xl md:text-3xl">$</span>400
                </div>
                <ul className="flex flex-col gap-3 text-lg mb-4">
                  <li className="flex items-center gap-5">
                    <LuCheckCircle2 size={25} /> Choice of Multiple Flavors
                  </li>
                  <li className="flex items-center gap-5">
                    <LuCheckCircle2 size={25} />
                    Aesthetic Decorations
                  </li>
                  <li className="flex items-center gap-5">
                    <LuCheckCircle2 size={25} />
                    Set Up and Clean Up
                  </li>
                </ul>
                <p className="text-lg md:text-xl">
                  Your guests will have the freedom to mix and match different
                  teas and toppings to their liking!
                </p>
              </div>
            </div>
          </div>
        </Tab>
        <Tab label="Delivery Drop Off">
          <div className="py-4">
            <div className="flex flex-col md:flex-row items-center mb-8 p-8 overflow-hidden neumorphism">
              <div className="flex-1 mb-4 md:mb-0">
                <img
                  src={delivery}
                  alt="barista"
                  className="rounded-3xl aspect-square"
                />
              </div>
              <div className="flex justify-start flex-col flex-1 w-full pl-2 md:pl-10">
                {' '}
                <h4 className="hidden lg:block text-2xl md:text-3xl font-medium mb-2">
                  Pre-packaged Boba Delivery
                </h4>
                <p className="text-2xl mt-2 ">Starting at</p>
                <div className="flex justify-start text-5xl md:text-6xl mb-4">
                  <span className="mt-2 text-2xl md:text-3xl">$</span>6{' '}
                  <span className="ml-2 self-end text-2xl md:text-3xl">
                    /drink
                  </span>
                </div>
                <ul className="flex flex-col gap-3 text-lg mb-4">
                  <li className="flex items-center gap-5">
                    <LuCheckCircle2 size={25} /> Additional 50&cent; for
                    Toppings
                  </li>
                  <li className="flex items-center gap-5">
                    <LuCheckCircle2 size={25} />
                    30 Drinks Order Minimum
                  </li>
                  <li className="flex items-center gap-5">
                    <LuCheckCircle2 size={25} />
                    Free Delivery for 50+ Drinks
                  </li>
                  <li className="flex items-center gap-5">
                    <LuCheckCircle2 size={25} />
                    $50 Delivery Fee Otherwise
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
      <div className="w-full flex justify-center gap-10">
        <Button
          style="secondary"
          href="https://tbbtesting.netlify.app/menu"
          className="md:w-[180px] w-[150px]"
        >
          View Menu
        </Button>
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
