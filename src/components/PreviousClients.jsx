
import { cateredCompanies } from '../constants';

const PreviousClients = () => {
  return (
    <div className="w-full flex justify-center py-16 px-4 clients-gradient">
      <div className="max-w-[1240px] mx-10 flex flex-col">
        <div className="text-center">
          <h2 className="playfair md:text-4xl sm:text-3xl text-2xl font-semibold text-[#Fffafc] py-2 md:pb-4">
            Companies we&apos;ve worked with previously
          </h2>
        </div>
        <div className="">
          <div className="flex flex-wrap justify-evenly w-full items-center py-2">
            {cateredCompanies.map((company) => (
              <div key={company.id} className='px-2 md:px-10'>
                <img src={company.logo} alt="" width={100} height={100} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousClients;
