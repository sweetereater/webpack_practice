import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode
  className: string,
  onClick: () => void,
}

function Button(props: ButtonProps) {
  const { children, className, onClick } = props;
  return <div className={`${styles.button} ${className}`} onClick={onClick}>
    {children}
  </div>
}

export { Button };
