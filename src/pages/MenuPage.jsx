import { wholeMenu } from '../constants';

const Menu = () => {
  return (
    <div className="menu-gradient">
      <div className="flex max-w-[700px] p-10 mx-auto text-center">
        <div className="flex-col text-center bg-white rounded-3xl py-4 px-10">
          <h3 className="text-[2.5rem] md:text-[3.2rem] font-bold playfair mb-2 mt-5">
            TarosBobaBar Menu
          </h3>
          <div className="rounded-full border-2 border-color-hotPink/50"></div>

          <div className="flex flex-col my-10">
            <h3 className="font-bold text-[1.8rem] mb-5 mx-auto playfair tracking-wider">
              Menu Sample Options
            </h3>
            <p className="text-lg text-left mb-2">
              Can&apos;t decide on which tea/milk tea flavors or toppings you
              want for your next event? Let us know what you would like to
              sample and we will deliver it to you for FREE! Take the guesswork out and make sure you pick the perfect flavors and toppings
              for your next event!
            </p>
            <ul className="flex flex-wrap justify-start items-center gap-10 mt-5">
              <li className="flex">
                <h5 className={`text-bold text-[20px] text-left mr-3`}>1.</h5>
                <div className="flex flex-col">
                  <h5 className="font-semibold text-xl md:text-[20px] text-left tracking-wide">
                    $5 per drink with toppings
                  </h5>
                </div>
              </li>
              <li className="flex">
                <h5 className={`text-bold text-[20px] text-left mr-3`}>2.</h5>
                <div className="flex flex-col">
                  <h5 className="font-semibold text-xl md:text-[20px] text-left tracking-wide">
                    $70 for Entire Menu Sample
                  </h5>
                </div>
              </li>
            </ul>
            <div className="mx-auto mt-10 border rounded-full border-color-hotPink/30 w-4/5" />
          </div>
          {wholeMenu.map((menu, menuIndex) => (
            <div key={menuIndex} className="flex flex-col my-10">
              <h3 className="font-bold text-[1.8rem] mb-5 mx-auto playfair tracking-wider">
                {menu.title}
              </h3>
              <ul
                className={
                  menuIndex !== wholeMenu.length - 1
                    ? 'grid grid-cols-1 gap-5 items-center lato'
                    : 'flex flex-wrap justify-center items-center gap-10'
                }
              >
                {menu.items.map((tea, teaIndex) => (
                  <li className="flex" key={teaIndex}>
                    <h5
                      className={
                        menuIndex === wholeMenu.length - 1
                          ? `hidden`
                          : `text-bold text-[20px] text-left mr-3`
                      }
                    >
                      {teaIndex + 1}.
                    </h5>
                    <div className="flex flex-col">
                      <h5 className="font-semibold text-xl md:text-[20px] text-left tracking-wide">
                        {tea.name}
                      </h5>
                      <p className="text-lg text-left ml-5">
                        {tea.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div
                className={
                  menuIndex === wholeMenu.length - 1
                    ? `hidden`
                    : 'mx-auto mt-10 border rounded-full border-color-hotPink/30 w-4/5'
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
