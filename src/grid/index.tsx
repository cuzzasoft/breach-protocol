export const GridBox = ({
  options,
  border,
}: {
  options: string[];
  border?: string;
}) => (
  <div className="grid w-48 grid-cols-5 gap-2 p-2">
    {options.map((o, i) => (
      <div className={`${border}`} key={i}>
        {o}
      </div>
    ))}
  </div>
);
