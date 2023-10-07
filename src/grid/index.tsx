export const GridBox = ({
  options,
  border,
}: {
  options: string[];
  border?: string;
}) => (
  <div className="grid grid-cols-5 gap-2 w-48 p-2">
    {options.map((o, i) => (
      <div className={`${border}`} key={i}>
        {o}
      </div>
    ))}
  </div>
);
