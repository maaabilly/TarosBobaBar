import { Link } from 'react-router-dom';

const Button = ({ className, style, children, href }) => {
  const classes =
    'font-medium py-3 rounded-md text-nowrap transition-all hover:font-semibold hover:scale-105 flex justify-center items-center ';
  const renderStyle = (style) => {
    if (style === 'primary') {
      return 'bg-violet-500 text-white btn-gradient hover:bg-color-brightPink';
    } else {
      return 'text-color-hotPink bg-transparent border border-solid border-color-brightPink hover:text-color-brightPink';
    }
  };

  return (
    <Link to={href || ''} target="_blank">
      <button className={`${classes} ${className || ''} ${renderStyle(style)}`}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
