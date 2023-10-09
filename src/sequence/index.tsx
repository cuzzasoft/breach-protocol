import icon from './icon.png';
import basic from './basic.png';
import advanced from './advanced.png';
import expert from './expert.png';
import { GridBox } from '../grid';
import { generateOptions } from '../options';
import { HTMLProps } from 'react';
import { FancyBarText, MiniParagraph, YakuzaText } from '../components';

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
  <div className="flex">
    <div className="w-1/2">
      <GridBox options={generateOptions(size)} />
    </div>
    <div className="flex w-1/2 p-0.5">
      <img className="h-10 w-10" src={img} alt={`${name} logo`} />
      <div className="w-1/2 grow pl-2 text-left align-middle">
        <div className="uppercase leading-[1.5rem] text-white">{name}</div>
        <div className="leading-[1rem]">{description}</div>
      </div>
    </div>
  </div>
);

const Header = () => (
  <div className="flex flex-grow items-center border-b border-cp-border pl-2 pt-1">
    <div className="flex w-1/2">
      <img className="h-6 w-6" src={icon} alt="Sequence logo" />
      <h3 className="py-0 uppercase">Sequence required to upload</h3>
    </div>
    <div className="w-1/4 self-end pb-0.5 text-right text-[4px] uppercase leading-[0.3rem]">
      <span className="text-right">Spacial jack</span>
      <span className="inline-block text-left indent-2">Harajuku</span>
    </div>
    <MiniParagraph />
  </div>
);

const Footer = () => (
  <div className="flex">
    <YakuzaText />
    <div className="w-1/2">
      <FancyBarText />
    </div>
  </div>
);

export const Sequence = () => (
  <div>
    <div className="relative rounded-tl-lg border border-cp-border">
      <Header />
      <Upload
        size={2}
        name="Basic datamine"
        description="Extract eurodollars"
        img={basic}
      />
      <Upload
        size={3}
        name="Advanced datamine"
        description="Extact eurdollars and quickhack crafting components"
        img={advanced}
      />
      <Upload
        size={4}
        name="Expert datamine"
        description="Extract quickhands and quickhand crafting specs"
        img={expert}
      />
    </div>
    <Footer />
  </div>
);
