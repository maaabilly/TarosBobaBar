const Menu = () => {
  return (
    <div className="menu-gradient">
      <div className="flex max-w-[700px] p-10 mx-auto text-center">
        <div className="flex-col text-center bg-white rounded-3xl py-4 px-10">
          <h3 className="text-[35px] font-bold playfair mb-2 mt-5">
            TarosBobaBar Menu
          </h3>
          <div className="rounded-full border-2 border-color-hotPink/50"></div>
          <div className="flex flex-col my-10">
            <div className="flex">
              <h3 className="font-bold text-2xl mb-5 mx-auto playfair">
                Milk Teas
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-5 items-center lato">
              <li className="flex">
                <h5 className="text-bold text-[20px] text-left mr-3">1.</h5>
                <div className="flex flex-col">
                  <h5 className="text-bold text-[20px] text-left">
                    Jasmine Milk Tea
                  </h5>
                  <p className="text-md text-left ml-5">
                    A delicate blend of fragrant jasmine tea and creamy milk for
                    a soothing, aromatic experience that transcends the
                    ordinary.
                  </p>
                </div>
              </li>
              <li className="flex">
                <h5 className="text-bold text-[20px] text-left mr-3">2.</h5>
                <div className="flex flex-col">
                  <h5 className="text-bold text-[20px] text-left">
                    Black Milk Tea
                  </h5>
                  <p className="text-md text-left ml-5">
                    Bold, robust black tea meets creamy milk for a rich,
                    full-bodied beverage, a perfect harmony of flavor and
                    comfort.
                  </p>
                </div>
              </li>
              <li className="flex">
                <h5 className="text-bold text-[20px] text-left mr-3">3.</h5>
                <div className="flex flex-col">
                  <h5 className="text-bold text-[20px] text-left">
                    Honey Milk Tea
                  </h5>
                  <p className="text-md text-left ml-5">
                    This tasty drink brings together the creaminess of milk with
                    the gentle sweetness of honey, creating a soothing and
                    delicious treat.
                  </p>
                </div>
              </li>
              <li className="flex">
                <h5 className="text-bold text-[20px] text-left mr-3">4.</h5>
                <div className="flex flex-col">
                  <h5 className="text-bold text-[20px] text-left">
                    Thai Milk Tea
                  </h5>
                  <p className="text-md text-left ml-5">
                    Spiced black tea meets sweet condensed milk for a vibrant,
                    refreshing sip of Thai culture.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mx-auto border rounded-full border-color-hotPink/30 w-4/5"></div>
          <div className="flex flex-col my-10">
            <div className="flex">
              <h3 className="font-bold text-2xl mb-5 mx-auto playfair">
                Fruit Teas
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-5 items-center lato">
              <li className="flex">
                <h5 className="text-bold text-[20px] text-left mr-3">1.</h5>
                <div className="flex flex-col">
                  <h5 className="text-bold text-[20px] text-left">
                    Lychee Green / Black Tea
                  </h5>
                  <p className="text-md text-left ml-5">
                    Sip on the refreshing allure of green tea infused with the
                    exotic sweetness of lychee—a harmonious blend that&pos;s
                    both vibrant and delicious.
                  </p>
                </div>
              </li>
              <li className="flex">
                <h5 className="text-bold text-[20px] text-left mr-3">2.</h5>
                <div className="flex flex-col">
                  <h5 className="text-bold text-[20px] text-left">
                    Mango Green / Black Tea
                  </h5>
                  <p className="text-md text-left ml-5">
                    A tropical escape featuring the bold essence of green tea
                    intertwined with the juicy sweetness of ripe mango.
                  </p>
                </div>
              </li>
              <li className="flex">
                <h5 className="text-bold text-[20px] text-left mr-3">3.</h5>
                <div className="flex flex-col">
                  <h5 className="text-bold text-[20px] text-left">
                    Passion Fruit Green / Black Tea
                  </h5>
                  <p className="text-md text-left ml-5">
                    Exotic passion fruit essence delicately blended with premium
                    tea leaves, creating a vibrant and refreshing tropical
                    escape.
                  </p>
                </div>
              </li>
              <li className="flex">
                <h5 className="text-bold text-[20px] text-left mr-3">4.</h5>
                <div className="flex flex-col">
                  <h5 className="text-bold text-[20px] text-left">
                    Peach Green / Black Tea
                  </h5>
                  <p className="text-md text-left ml-5">
                    Juicy peach essence meets perfectly brewed tea for a
                    blissful, refreshing sip.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mx-auto border rounded-full border-color-hotPink/30 w-4/5"></div>
          <div className="flex flex-col my-10">
            <div className="flex">
              <h3 className="font-bold text-xl mb-5 mx-auto playfair">
                Toppings
              </h3>
            </div>
            <ul className="flex justify-evenly items-center mb-2 lato">
              <li className="">Honey Boba</li>
              <li className="">White Pearls</li>
            </ul>
            <ul className="flex justify-evenly items-center lato">
              <li className="">Mango Jelly</li>
              <li className="">Strawberry Jelly</li>
              <li className="">Lychee Jelly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
