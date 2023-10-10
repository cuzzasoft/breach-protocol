import barcode from './barcode.png';
import barcodeRed from './barcode-red.png';
import { BreachTime } from '../breach-time';
import { Buffer, BufferHeading } from '../buffer';
import { CodeMatrix } from '../code-matrix';
import { YakuzaText } from '../components';
import { Sequence } from '../sequence';

const Header = () => (
  <div className="flex pb-2">
    <div className="w-2/5"></div>
    <div className="w-3/5">
      <div className="flex h-6">
        <div className="w-10/12 bg-cp-yellow text-[6px] uppercase leading-[0.3rem] text-cp-border">
          <div className="flex h-6 p-1">
            <div className="w-1/3 self-end text-left">
              Vatgrown consortium intrusion biz gunship flat-out geodesic nc
              kzrekznov
            </div>
            <div className="w-1/3">breach protocol interface</div>
            <div className="w-1/3 self-end text-right">
              Ekumer 62uz-fflh-9ylt-e327
            </div>
          </div>
        </div>
        <div className="w-2/12">
          <img className="w-3/4" src={barcode} alt="Header barcode" />
        </div>
      </div>
      <div className="flex h-6">
        <div className="w-11/12 self-end text-right text-[8px] uppercase leading-[0.3rem] text-cp-yellow">
          Ekumer 62uz-fflh-9ylt-e327
        </div>
        <div className="w-1/12 self-end">
          <img
            className="ml-auto block w-1/2"
            src={barcodeRed}
            alt="Sub header barcode"
          />
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <div className="flex">
    <div className="w-1/3">
      <YakuzaText />
    </div>
    <div className="w-1/3"></div>
    <div className="w-1/3">
      <div className="flex h-1/3 border-x border-b border-cp-border text-left text-[5px]  uppercase leading-[0.3rem] text-cp-yellow">
        <div className="flex w-1/5">
          <span className="inline-block w-2 bg-cp-yellow"></span>
          <span className="pl-0.5 pt-[1px]">0 0 0</span>
          <span className="pl-0.5 pt-[1px] indent-0.5">0 0</span>
        </div>
        <div className="flex w-2/5">
          <span className="inline-block h-3/4 w-2 bg-cp-yellow"></span>
          <span className="pl-1 pt-[1px] text-[4px] uppercase">
            mirror madness img from blackwall . 45986 12094
          </span>
        </div>
        <div className="flex w-3/5 pt-0">
          <span className="w-3/5 pl-0.5 pr-0.5 text-right tracking-[0.2em]">
            2000 - 358305 - 20000005 . MTM
          </span>
          <div className="flex w-1/5">
            <span className="inline-block w-2 bg-cp-yellow"></span>
            <span className="pl-0.5">0 4 . 3 %</span>
          </div>
          <div className="flex w-1/5 items-center">
            <hr className="border-1 w-full border-t border-cp-border" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const App = () => {
  return (
    <div className="min-h-screen bg-cp-bg p-12 text-center font-blender text-lg font-thin text-cp-text">
      <Header />
      <div className="border border-cp-border border-x-cp-yellow border-b-cp-yellow px-1">
        <div className="border-x border-cp-border px-2">
          <div className="border-x border-cp-border px-4">
            <div className="border-x border-cp-border px-4 pb-4">
              <div className="flex gap-8 pb-1">
                <div className="w-2/5" />
                <div className="w-3/5">
                  <BufferHeading />
                </div>
              </div>
              {/* todo: implement full-bleed properly*/}
              <div className="flex gap-8 border-b border-r border-t border-cp-border bg-cp-header-bg py-1">
                <div className="w-2/5">
                  <BreachTime />
                </div>
                <div className="w-3/5">
                  <Buffer />
                </div>
              </div>
              <div className="flex gap-8 pt-4">
                <div className="w-2/5">
                  <CodeMatrix />
                </div>
                <div className="w-3/5">
                  <Sequence />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
