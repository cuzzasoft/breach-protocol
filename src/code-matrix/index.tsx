import icon from './icon.png';
import footer from './footer.png';
import { generateOptions } from '../options';
import { GridBox } from '../grid';
import { FancyBarText, MiniParagraph } from '../components';

const Header = () => (
  <div className="flex items-center rounded-tl-md border-b border-cp-border bg-cp-yellow pl-2 pt-1 text-cp-border">
    <div className="flex w-1/2">
      <img className="h-6 w-6" src={icon} alt="Code matrix logo" />
      <h3 className="grow py-0">CODE MATRIX</h3>
    </div>
    <div className="w-1/4" />
    <MiniParagraph />
  </div>
);

const WideNumbers = ({ left, right }: { left: string; right?: string }) => (
  <div>
    {left}
    {right && <span className="tracking-[0.4em]">{right}</span>}
  </div>
);

const Footer = () => (
  <div className="flex text-[4px] uppercase leading-[0.3rem] text-cp-yellow">
    <div className="flex w-1/5 pt-1 text-left">
      <img className="h-6 w-6" src={footer} alt="code matrix footer icon" />
      <div className="pl-0.5 pt-0.5 uppercase">
        <p>Psychoactive ICE</p>
        <p>hologram cybernetic chip</p>
        <p>code trodes mimetic RAM</p>
        <p>Laser-scrawled pyrolitic</p>
      </div>
    </div>
    <div className="w-1/5 pt-1">
      <WideNumbers left="2.24645" right="2 . 3 4 8 0" />
      <WideNumbers left="0.45654" right="0 . 1 4 0 0" />
      <WideNumbers left="0.937433" right="0 . 4 4" />
    </div>
    <div className="w-1/5 pt-1">
      <WideNumbers left="02:23 1.93743" right="0 . 4 4 3 5" />
      <WideNumbers left="02:23 4.93743" right="0 . 0 0 0 0" />
      <div className="text-left indent-8">02:50</div>
    </div>
    <div className="w-1/5 pt-1">
      <WideNumbers left="02:28" />
      <WideNumbers left="02:42" />
    </div>
    <div className="w-1/5">
      <FancyBarText />
    </div>
  </div>
);

export const CodeMatrix = () => {
  const options = generateOptions(25);

  return (
    <>
      <div className="rounded-tl-lg border border-cp-border">
        <Header />
        <div className="flex justify-center font-medium">
          <GridBox options={options}></GridBox>
        </div>
      </div>
      <Footer />
    </>
  );
};
