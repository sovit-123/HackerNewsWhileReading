import React from 'react';

const ButtonInline = ({ onClick, type = 'button', children }) => {
  return (
    <Button type={type} className="button-inline" onClick={onClick}>
      {children}
    </Button>
  );
};

const Button = ({ onClick, className, type = 'button', children }) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
};

export { Button, ButtonInline };
