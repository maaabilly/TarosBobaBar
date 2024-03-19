const Button = ({ className, style, children, href }) => {
  const classes =
    'font-medium py-3 rounded-md text-nowrap transition-all btn-gradient hover:font-semibold hover:tracking-wider';
  const renderStyle = (style) => {
    if (style === 'primary') {
      return 'bg-violet-500 text-white hover:bg-color-brightPink';
    } else {
      return '';
    }
  };

  return (
    <button className={`${classes} ${className || ''} ${renderStyle(style)}`}>
      <a href={href || ''} target="_blank">
        {children}
      </a>
    </button>
  );
};

export default Button;
