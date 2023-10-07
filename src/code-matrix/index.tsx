import icon from './icon.png';
import { generateOptions } from '../options';
import { GridBox } from '../grid';

export const CodeMatrix = () => {
  const options = generateOptions(25);

  return (
    <div className="rounded-tl-lg border border-cp-border">
      <div className="flex items-center rounded-tl-md border-b border-cp-border bg-cp-yellow pl-2 text-cp-border">
        <img className="h-6 w-6" src={icon} alt="Code matrix logo" />
        <h3 className="grow py-0">CODE MATRIX</h3>
      </div>
      <div className="flex justify-center font-medium">
        <GridBox options={options}></GridBox>
      </div>
    </div>
  );
};
