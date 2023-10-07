import icon from './icon.png';
import { generateOptions } from '../options';
import { GridBox } from '../grid';

export const CodeMatrix = () => {
  const options = generateOptions(25);

  return (
    <div className="border border-cp-border rounded-tl-lg">
      <div className="pl-2 flex border-b border-cp-border bg-cp-yellow text-cp-border items-center rounded-tl-md">
        <img
          style={{ height: 25, width: 25 }}
          src={icon}
          alt="Code matrix logo"
        />
        <h3 className="grow py-0">CODE MATRIX</h3>
      </div>
      <div className="flex justify-center font-medium">
        <GridBox options={options}></GridBox>
      </div>
    </div>
  );
};
