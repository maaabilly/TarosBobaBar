import { wholeMenu } from '../constants';

const Menu = () => {
  return (
    <div className="menu-gradient">
      <div className="flex max-w-[700px] p-10 mx-auto text-center">
        <div className="flex-col text-center bg-white rounded-3xl py-4 px-10">
          <h3 className="text-[35px] font-bold playfair mb-2 mt-5">
            TarosBobaBar Menu
          </h3>
          <div className="rounded-full border-2 border-color-hotPink/50"></div>
          {wholeMenu.map((menu, menuIndex) => (
            <div key={menu.title} className="flex flex-col my-10">
              <h3 className="font-bold text-2xl mb-5 mx-auto playfair">
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
                      <h5 className="text-bold text-[20px] text-left">
                        {tea.name}
                      </h5>
                      <p className="text-md text-left ml-5">
                        {tea.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div
                className={
                  menuIndex === wholeMenu.length - 1
                    ? ``
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
