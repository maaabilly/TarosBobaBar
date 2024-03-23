import { textLogo } from '../assets';
const NavLogo = ({ className }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <a href="#home">
        <img
          src={textLogo}
          alt="TarosBobaBar - Bay Area boba catering for corporate and private events"
          width={100}
          height={100}
          className="rounded-[100%]"
        />
      </a>
      <h1 className="hidden text-2xl font-bold ml-5">
        <a href="#home"> TarosBobaBar</a>
      </h1>
    </div>
  );
};

export default NavLogo;
