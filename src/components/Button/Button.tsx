import React from 'react';
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode
  className: string,
  onClick: () => void,
}

function Button(props: ButtonProps) {
  const { children, className, onClick } = props;
  return <div className={className} onClick={onClick}>
    {children}
  </div>
}

export { Button };
