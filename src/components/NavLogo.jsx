import { plainLogo } from '../assets';
const NavLogo = () => {
  return (
    <div className="flex justify-center items-center">
      <a href="#home">
        <img
          src={plainLogo}
          alt="TarosBobaBar Logo"
          width={50}
          height={50}
          className="rounded-[100%]"
        />
      </a>
      <h1 className="text-2xl font-bold ml-5">
        <a href="#home"> TarosBobaBar</a>
      </h1>
    </div>
  );
};

export default NavLogo;
