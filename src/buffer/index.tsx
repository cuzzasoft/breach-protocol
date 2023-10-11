import { useState } from 'react';
import { GridBox } from '../grid';

export const Buffer = () => {
  const [buffer] = useState(Array(5).fill(`\u00A0`));

  return (
    <div className="text-left">
      <div className="inline-flex border-[1.5px] border-cp-yellow border-opacity-50">
        <GridBox
          options={buffer}
          className="border border-dashed border-cp-border"
        />
      </div>
    </div>
  );
};

export const BufferHeading = () => (
  <div>
    <div className="pt-0.5 text-left text-[4px] font-bold uppercase leading-[0.3rem]">
      原 pixel multinational orbital prosthetic ice chrome cop circuitry 宿
    </div>
    <h1 className="pb-0 pt-0.5 font-medium uppercase leading-[1.2rem]">
      Buffer
    </h1>
  </div>
);
