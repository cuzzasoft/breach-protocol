import icon from './icon.png';
import basic from './basic.png';
import advanced from './advanced.png';
import expert from './expert.png';
import { GridBox } from '../grid';
import { generateOptions } from '../options';
import { HTMLProps } from 'react';

const Upload = ({
  size,
  name,
  description,
  img,
}: {
  size: number;
  name: string;
  description: string;
  img: HTMLProps<HTMLElement>['src'];
}) => (
  <div className="columns-2">
    <GridBox options={generateOptions(size)} />
    <div className="flex p-0.5">
      <img style={{ height: 50, width: 50 }} src={img} alt={`${name} logo`} />
      <div className="pl-2 text-left align-middle">
        <div className="text-white leading-[1.5rem]">{name}</div>
        <div className="leading-[1rem]">{description}</div>
      </div>
    </div>
  </div>
);

export const Sequence = () => (
  <div className="border border-cp-border rounded-tl-lg relative">
    <div className="pl-2 flex border-b border-cp-border items-center">
      <img style={{ height: 25, width: 25 }} src={icon} alt="Sequence logo" />
      <h3 className="py-0">SEQUENCE REQUIRED TO UPLOAD</h3>
    </div>
    <Upload
      size={2}
      name="BASIC DATAMINE"
      description="Extract eurodollars"
      img={basic}
    />
    <Upload
      size={3}
      name="ADVANCED DATAMINE"
      description="Extact eurdollars and quickhack crafting components"
      img={advanced}
    />
    <Upload
      size={4}
      name="EXPERT DATAMINE"
      description="Extract quickhands and quickhand crafting specs"
      img={expert}
    />
  </div>
);
