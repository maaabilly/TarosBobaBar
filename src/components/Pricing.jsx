// import { useState } from 'react';
import { Tabs, Tab } from './Tabs';
import Button from './Button';
import { barista, delivery, selfServe } from '../assets';
import { LuCheckCircle2, LuAlertCircle } from 'react-icons/lu';

const Pricing = () => {
  const encodedEmail = String.fromCharCode(
    99,
    111,
    110,
    116,
    97,
    99,
    116,
    64,
    116,
    97,
    114,
    111,
    115,
    98,
    111,
    98,
    97,
    98,
    97,
    114,
    46,
    99,
    111,
    109
  );

  const baristaMailto =
    '?subject=Premium%20On%20Site%20Barista%20Inquiry&body=Hello%20Tea%20Lovers!%0A%0APlease%20share%20with%20us%20some%20details%20regarding%20the%20event%20you%20are%20planning!%0A%0ALocation%3A%20%20%0ADate%3A%20%20%0ATime%3A%20%20%0AHours%20of%20Service%3A%20%20%0AType%20of%20Event%3A%20%20%0AEstimated%20Guests%20Amount%3A%20%20%0AAdditional%20Details%3A%0A%20%20%20%20%0AThank%20you%20so%20much%20for%20reaching%20out%20to%20Tarosbobabar!%20%0A%0AWe%20will%20get%20back%20to%20you%20as%20soon%20as%20possible!';

  // const deliveryMailto =
  //   '?subject=Delivery%20Drop%20Off%20Inquiry&body=Hello%20Tea%20Lovers!%0A%0APlease%20share%20with%20us%20some%20details%20regarding%20the%20event%20you%20are%20planning!%0A%0ALocation%3A%20%20%0ADate%3A%20%20%0ATime%20of%20Day%3A%20%20%0ANumber%20of%20Drinks%3A%20%20%0AAdditional%20Details%3A%0A%0AThank%20you%20so%20much%20for%20reaching%20out%20to%20Tarosbobabar!%20%0A%0AWe%20will%20get%20back%20to%20you%20as%20soon%20as%20possible!';

  return (
    <div
      className="relative mx-auto w-full pt-[4rem] pb-[1rem] md:pb-[2rem] lg:pb-[2rem] px-4"
      id="services"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className=" z-10 ">
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
              <div className="mb-8 p-8 overflow-hidden neumorphism">
                <div className="flex flex-col md:flex-row items-center ">
                  <div className="flex-1 mb-4 md:mb-0 justify-center flex">
                    <img
                      src={barista}
                      alt="boba milk tea catering barista"
                      className="rounded-3xl"
                    />
                  </div>
                  <div className="flex justify-start flex-col gap-2 flex-1 px-10 pl-2 md:pl-10">
                    <h4 className="hidden lg:block text-2xl md:text-3xl font-medium mb-2">
                      Premium On Site Barista
                    </h4>
                    <p className="text-2xl mt-2 ">Starting at</p>
                    <div className="flex justify-start text-5xl md:text-6xl mb-4">
                      <span className="mt-2 text-2xl md:text-3xl">$</span>500{' '}
                      <span className="ml-2 self-end text-2xl md:text-3xl">
                        /hour
                      </span>
                    </div>
                    <ul className="flex flex-col gap-3 text-[1.2rem] mb-4">
                      <li className="flex items-center gap-5">
                        <LuAlertCircle size={25} /> Minimum 2 Hours Service
                      </li>
                      <li className="flex items-center gap-5">
                        <LuAlertCircle size={25} /> 150 Guests Limit
                      </li>
                      <li className="flex items-center gap-5">
                        <LuAlertCircle size={25} /> No Non-Caffeinated Options
                      </li>
                    </ul>
                    <p className="text-lg md:text-xl">
                      We will bring our ENTIRE menu to your event and have
                      professional on-site baristas making drinks to order. Your
                      guests will enjoy endless possibilities for tea flavor,
                      sweetness adjustments, and topping combinations!
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 mt-10">
                  <Button
                    style="secondary"
                    href="/menu"
                    className="w-[280px] sm:w-[200px] md:h-[55px] lg:w-[220px]"
                  >
                    View Menu
                  </Button>
                  <Button
                    style="primary"
                    href={`mailto:${encodedEmail}${baristaMailto}`}
                    className="w-[280px] sm:w-[200px] md:h-[55px] lg:w-[220px]"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </Tab>
          <Tab label="Self Serve Station">
            <div className="py-4">
              <div className="mb-8 p-8 overflow-hidden neumorphism">
                <div className="flex flex-col md:flex-row items-center ">
                  <div className="flex-1 mb-4 md:mb-0">
                    <img
                      src={selfServe}
                      alt="boba catering private event table station set up"
                      className="rounded-3xl"
                    />
                  </div>
                  <div className="flex justify-start flex-col gap-2  flex-1 w-full pl-2 md:pl-10">
                    <h4 className="hidden lg:block text-2xl md:text-3xl font-medium mb-2">
                      Fully Equipped Self Serve Boba Station
                    </h4>
                    <p className="text-2xl mt-2 ">Starting at</p>
                    <div className="flex justify-start text-5xl md:text-6xl mb-4">
                      <span className="mt-2 text-2xl md:text-3xl">$</span>500
                      <span className="ml-2 self-end text-2xl md:text-3xl">
                        /station
                      </span>
                    </div>
                    <ul className="flex flex-col gap-3 text-lg mb-4">
                      <li className="flex items-center gap-5">
                        <LuCheckCircle2 size={25} className="flex-none" />
                        Freedom to mix and match
                      </li>
                      <li className="flex items-center gap-5">
                        <LuCheckCircle2 size={25} className="flex-none" />
                        Aesthetic decorations
                      </li>
                      <li className="flex items-center gap-5">
                        <LuAlertCircle size={25} className="flex-none" />
                        Pricing base on event size
                      </li>
                      <li className="flex items-center gap-5">
                        <LuAlertCircle size={25} className="flex-none" />
                        Custom pricing for 100+ guest events
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 mt-10">
                  <Button
                    style="secondary"
                    href="/menu"
                    className="w-[280px] sm:w-[200px] md:h-[55px] lg:w-[220px]"
                  >
                    View Menu
                  </Button>
                  <Button
                    style="primary"
                    href="https://tarosbobabar.paperform.co"
                    className="w-[280px] sm:w-[200px] md:h-[55px] lg:w-[220px]"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </Tab>
          <Tab label="Delivery Drop Off">
            <div className="py-4">
              <div className="mb-8 p-8 overflow-hidden neumorphism">
                <div className="flex flex-col md:flex-row items-center ">
                  <div className="flex-1 mb-4 md:mb-0">
                    <img
                      src={delivery}
                      alt="boba catering delivery driver"
                      className="rounded-3xl aspect-square"
                    />
                  </div>
                  <div className="flex justify-start flex-col gap-2  flex-1 w-full pl-2 md:pl-10">
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
                        <LuCheckCircle2 size={25} className="flex-none" />
                        Free delivery for 300+ drinks
                      </li>
                      <li className="flex items-center gap-5">
                        <LuAlertCircle size={25} className="flex-none" />
                        $100 delivery fee otherwise
                      </li>
                      <li className="flex items-center gap-5">
                        <LuAlertCircle size={25} className="flex-none" />
                        50 drinks order minimum
                      </li>
                      <li className="flex items-center gap-5">
                        <LuAlertCircle size={25} /> Toppings not included
                      </li>
                      <li className="flex items-center gap-5">
                        <LuAlertCircle size={25} className="flex-none" />
                        See menu for Samples Options
                      </li>
                    </ul>
                  </div>
                </div>
                {/* *** With Order Sample button
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 mt-10"> 
                */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 mt-10">
                  <Button
                    style="secondary"
                    href="/menu"
                    className="w-[280px] sm:w-[180px] md:h-[55px] lg:w-[220px]"
                  >
                    View Menu
                  </Button>
                  {/* <Button
                    style="primary"
                    href={`https://9wgtpbuh.paperform.co/`}
                    className="w-[280px] sm:w-[180px] md:h-[55px] lg:w-[220px]"
                  >
                    Order Sample
                  </Button> */}
                  <Button
                    style="primary"
                    href={`https://kykdfpbp.paperform.co/`}
                    className="w-[280px] sm:w-[180px] md:h-[55px] lg:w-[220px]"
                  >
                    Order Delivery
                  </Button>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
        <div className="w-full flex justify-center gap-10">
          {/* <Button
            style="secondary"
            href="https://tarosbobabar.netlify.app/menu"
            className="md:w-[180px] w-[150px]"
          >
            View Menu
          </Button> */}
          {/* <Button
            style="primary"
            href="https://tarosbobabar.paperform.co"
            className="md:w-[180px] w-[150px]"
          >
            Book Now
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
