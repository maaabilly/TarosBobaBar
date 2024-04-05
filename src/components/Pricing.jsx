// import { useState } from 'react';
import { Tabs, Tab } from './Tabs';
import Button from './Button';
import { barista, delivery, stand5 } from '../assets';
import { LuCheckCircle2 } from 'react-icons/lu';

const Pricing = () => {
  const encodedEmail = String.fromCharCode(
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
    64,
    103,
    109,
    97,
    105,
    108,
    46,
    99,
    111,
    109
  );

  const baristaMailto =
    '?subject=Premium%20On%20Site%20Barista%20Inquiry&body=Hello%20Tea%20Lovers!%0A%0APlease%20share%20with%20us%20some%20details%20regarding%20the%20event%20you%20are%20planning!%0A%0ALocation%3A%20%20%0ADate%3A%20%20%0ATime%3A%20%20%0AHours%20of%20Service%3A%20%20%0AType%20of%20Event%3A%20%20%0AEstimated%20Guests%20Amount%3A%20%20%0AAdditional%20Details%3A%0A%20%20%20%20%0AThank%20you%20so%20much%20for%20reaching%20out%20to%20Tarosbobabar!%20%0A%0AWe%20will%20get%20back%20to%20you%20as%20soon%20as%20possible!';

  const deliveryMailto =
    '?subject=Delivery%20Drop%20Off%20Inquiry&body=Hello%20Tea%20Lovers!%0A%0APlease%20share%20with%20us%20some%20details%20regarding%20the%20event%20you%20are%20planning!%0A%0ALocation%3A%20%20%0ADate%3A%20%20%0ATime%20of%20Day%3A%20%20%0ANumber%20of%20Drinks%3A%20%20%0AAdditional%20Details%3A%0A%0AThank%20you%20so%20much%20for%20reaching%20out%20to%20Tarosbobabar!%20%0A%0AWe%20will%20get%20back%20to%20you%20as%20soon%20as%20possible!';

  return (
    <div
      className="relative mx-auto w-full pt-[4rem] pb-[6rem] md:pb-[7rem] lg:pb-[9rem] px-4 bg-pricing lg:bg-cover bg-contain bg-bottom bg-no-repeat bottom-[-10px]"
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
                <div className="flex justify-center items-center gap-10 mt-10">
                  <Button
                    style="secondary"
                    href="https://tarosbobabar.netlify.app/menu"
                    className="w-[150px] md:w-[200px] md:h-[55px] lg:w-[220px]"
                  >
                    View Menu
                  </Button>
                  <Button
                    style="primary"
                    href={`mailto:${encodedEmail}${baristaMailto}`}
                    className="w-[150px] md:w-[200px] md:h-[55px] lg:w-[220px]"
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
                      src={stand5}
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
                      Your guests will have the freedom to mix and match
                      different teas and toppings to their liking!
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-10 mt-10">
                  <Button
                    style="secondary"
                    href="https://tarosbobabar.netlify.app/menu"
                    className="w-[150px] md:w-[200px] md:h-[55px] lg:w-[220px]"
                  >
                    View Menu
                  </Button>
                  <Button
                    style="primary"
                    href="https://tarosbobabar.paperform.co"
                    className="w-[150px] md:w-[200px] md:h-[55px] lg:w-[220px]"
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
                <div className="flex justify-center items-center gap-10 mt-10">
                  <Button
                    style="secondary"
                    href="https://tarosbobabar.netlify.app/menu"
                    className="w-[150px] md:w-[200px] md:h-[55px] lg:w-[220px]"
                  >
                    View Menu
                  </Button>
                  <Button
                    style="primary"
                    href={`mailto:${encodedEmail}${deliveryMailto}`}
                    className="w-[150px] md:w-[200px] md:h-[55px] lg:w-[220px]"
                  >
                    Contact Us
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
