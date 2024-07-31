import { menuBg, menuBg2 } from '../assets';
import NavLogo from '../components/NavLogo';
import { wholeMenu } from '../constants';

const backgroundColor = '#E5DFF5';
const backgroundColor2 = '#AFA2D4';

const Menu = () => {
  return (
    <div className="w-full mx-auto mb-20">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center">
        <NavLogo className={'my-5'} width={200} height={200} />
        {/* <img src={menuBg2} alt="drinks photo" className='px-10  mx-auto'/> */}
        <div className="flex flex-col mx-10 justify-center items-center max-w-[800px]">
          <h2 className="playfair md:text-4xl sm:text-3xl text-2xl text-center font-bold mt-2 mb-4 uppercase text-slate-800 tracking-wide">
            explore our menu
          </h2>
          <p className="tracking-wide">
            Discover a world of flavor with our diverse boba tea menu! Take
            advantage of our handcrafted boba teas, from classic milk teas to
            vibrant fruit teas. Perfect for any event, our offerings include
            customizable options to suit your taste and dietary needs. Elevate
            your next event and treat your guests to an unforgettable beverage
            experience!
          </p>
        </div>
        {wholeMenu.map((menu, menuIndex) => (
          <div key={menuIndex} className="flex flex-col mx-10 max-w-[1000px]">
            <h3 className="font-bold md:text-[2.5rem] sm:text-4xl text-3xl mb-10 px-5 pb-2 mt-12 mx-auto playfair text-slate-800 uppercase tracking-wide border-b-2 border-color-brightPink/40 ">
              {menu.title}
            </h3>
            <ul
              className={
                menuIndex !== wholeMenu.length - 1
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lato'
                  : 'flex flex-wrap justify-center items-center gap-10 max-w-[800px]'
              }
            >
              {menu.items.map((tea, teaIndex) => (
                <li key={teaIndex} className="flex flex-col mb-5">
                  <img
                    src={tea.image}
                    alt={tea.name}
                    className={tea.image ? 'flex rounded-lg' : 'hidden'}
                  />
                  <div className="flex flex-col ">
                    <h5
                      className={
                        menuIndex !== wholeMenu.length - 1
                          ? 'font-semibold text-2xl md:text-[20px] text-center tracking-wide mt-4 mb-2 uppercase'
                          : 'text-[1.4rem]'
                      }
                    >
                      {tea.name}
                    </h5>
                    <p className="text-lg text-left font-light w-[90%] mx-auto">
                      {tea.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
