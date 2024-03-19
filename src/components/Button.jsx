const Button = ({ className, style, children, href }) => {
  const classes = 'font-md py-3 rounded-md text-nowrap transition-all';
  const renderStyle = (style) => {
    if (style === 'primary') {
      return 'bg-violet-500 text-white hover:bg-violet-700';
    } else if (style === 'secondary') {
      return 'bg-white border border-2 border-violet-500 text-violet-600 hover:bg-violet-400 hover:text-white hover:border-violet-400';
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
