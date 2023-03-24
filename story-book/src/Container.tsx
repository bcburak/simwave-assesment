import React, { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  const { className, children, ...restProps } = props;

  return (
    <div className={`container mx-auto px-6 ${className}`} {...restProps}>
      {children}
    </div>
  );
};
    
export default Container;
