import { useState } from 'react';
import { GridBox } from '../grid';

export const Buffer = () => {
  const [buffer] = useState(Array(5).fill(`\u00A0`));

  return (
    <div className="text-left">
      <div className="border-[1.5px] border-cp-yellow border-opacity-50 inline-flex">
        <GridBox
          options={buffer}
          border="border border-cp-border border-dashed"
        />
      </div>
    </div>
  );
};

export const BufferHeading = () => (
  <div>
    <div className="pt-0.5 font-bold text-left leading-[0.3rem] text-[4px]">
      原 PIXEL MULTINATIONAL ORBITAL PROSTHETIC ICE CHROME COP CIRCUITRY 宿
    </div>
    <h1 className="p-0 font-medium leading-[1.2rem]">BUFFER</h1>
  </div>
);
