import * as React from 'react';
import clsx from 'clsx';

interface ContainerProps {
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 '>
      <div className={clsx('max-w-6xl mx-auto', className)}>{children}</div>
    </div>
  );
};
