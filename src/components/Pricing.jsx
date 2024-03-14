import { bobaIsLife } from '../assets';

const Pricing = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-gray-100" id="pricing">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold span text-center pb-[5rem]">
        Pricing
      </h1>

      <div className="max-w-[1240px] mx-10 grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-300 ">
          <img
            src={bobaIsLife}
            alt="img"
            className=" mx-auto mt-[-3rem] bg-white rounded-[100%]"
            width={100}
            height={100}
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Delivery Drop-Off
          </h2>
          <p className="text-center text-4xl font-bold mb-8">Ask for Quote</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">List 1</p>
            <p className="py-2 border-b mx-8">List 2</p>
            <p className="py-2 border-b mx-8">List 3</p>
          </div>
          <button className="bg-slate-500 hover:bg-slate-700 w-full sm:max-w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white">
            Start Trail
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 md:my-4 rounded-lg hover:scale-105 duration-300 bg-gray-300 my-14">
          <img
            src={bobaIsLife}
            alt="img"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Card 2</h2>
          <p className="text-center text-4xl font-bold mb-8">$100</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">List 1</p>
            <p className="py-2 border-b mx-8">List 2</p>
            <p className="py-2 border-b mx-8">List 3</p>
          </div>
          <button className="bg-slate-500 hover:bg-slate-700 w-full sm:max-w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white">
            Start Trail
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-300">
          <img
            src={bobaIsLife}
            alt="img"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Card 3</h2>
          <p className="text-center text-4xl font-bold mb-8">$100</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">List 1</p>
            <p className="py-2 border-b mx-8">List 2</p>
            <p className="py-2 border-b mx-8">List 3</p>
          </div>
          <button className="bg-slate-500 hover:bg-slate-700 w-full sm:max-w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
