import { cateredCompanies } from '../constants';

const PreviousClients = () => {
  return (
    <div className="w-full py-16 px-4 text-slate-800 bg-violet-500/50">
      <div className="max-w-[1240px] mx-10 flex flex-col">
        <div className="text-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 span">
            Companies we&apos;ve worked with previously
          </h1>
        </div>
        <div className="">
          <div className="flex flex-wrap justify-evenly w-full items-center py-2">
            {cateredCompanies.map((company) => (
              <div key={company.id}>
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
