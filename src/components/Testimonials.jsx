import { FaStar } from 'react-icons/fa';
import { testimonials } from '../constants';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  return (
    <div
      className="relative mx-auto w-full pt-[4rem] pb-[6rem] md:pb-[7rem] lg:pb-[9rem] px-4 bg-pricing lg:bg-cover bg-contain bg-bottom bg-no-repeat bottom-[-10px]"
      id="services"
    >
      <div className="max-w-[1240px] mx-auto mb-10">
        <div className="mx-10 flex flex-col justify-center items-center">
          <p className="text-slate-700 text-center uppercase font-bold">
            What our customers say
          </p>
          <h2 className="playfair md:text-4xl sm:text-3xl text-2xl text-center font-bold mt-2 mb-[2.5rem]">
            Testimonials
          </h2>

          {/* <div className="flex flex-col md:flex-row justify-center items-center gap-10"> */}
          <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-8">
            {testimonials.map((testimonial, index) => (
              <div className="neumorphism px-10 py-5" key={index}>
                <div className="flex flex-col h-full justify-between items-center">
                  <div>
                    <div className="flex gap-2 justify-start items-center w-full">
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                    </div>
                    <p className="flex my-5">{testimonial.review}</p>
                  </div>
                  <div className='flex self-start ml-5 gap-4'>
                    <img src={testimonial.avatar} alt="avatar" width={50} />
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-xl">
                        {testimonial.name}
                      </h4>
                      <p className="text-slate-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link
            className="font-semibold text-xl mt-7 px-3 pb-2 border-b-[2px] border-pink-400/40 hover:border-pink-400/80 hover:border-b-[3px] transition-all"
            to={'https://www.yelp.com/biz/taro-s-boba-bar-san-jose-2'}
            target="_blank"
          >
            Check out all our reviews!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
