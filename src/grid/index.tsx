import { HTMLProps } from 'react';

export const GridBox = ({
  options,
  className,
}: {
  options: string[];
  className?: HTMLProps<HTMLElement>['className'];
}) => (
  <div className="grid w-48 grid-cols-5 gap-2 p-2">
    {options.map((o, i) => (
      <div className={className} key={i}>
        {o}
      </div>
    ))}
  </div>
);
