import { useState } from 'react';

const Pricing = () => {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  return (
    <div className="w-full py-[10rem] px-4 bg-gray-100" id="pricing">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold span text-center pb-[5rem]">
          Pricing
        </h1>

        <div className="block md:hidden w-full bg-color-pink border border-gray-200 rounded-lg shadow">
          <ul className="flex justify-evenly items-center py-5 px-10 gap-10">
            <li className="flex-1">
              <button
                className={`text-white w-full ${
                  toggle === 1
                    ? 'border-b-[2px] border-ivory font-bold'
                    : ''
                }`}
                onClick={() => updateToggle(1)}
              >
                Premium On Site Barista
              </button>
            </li>
            <li className="flex-1">
              <button
                className={`text-white  w-full ${
                  toggle === 2
                    ? 'border-b-[2px] border-ivory font-bold'
                    : ''
                }`}
                onClick={() => updateToggle(2)}
              >
                Self Serve Boba Station
              </button>
            </li>
            <li className="flex-1">
              <button
                className={`text-white w-full ${
                  toggle === 3
                    ? 'border-b-[2px] border-ivory font-bold '
                    : ''
                }`}
                onClick={() => updateToggle(3)}
              >
                Delivery Drop Off
              </button>
            </li>
          </ul>
        </div>

        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
