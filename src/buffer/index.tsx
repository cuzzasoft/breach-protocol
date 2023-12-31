import { useState } from 'react';

export const Buffer = ({ size = 7 }: { size?: number }) => {
  const [buffer] = useState(Array(size).fill(`\u00A0`));

  return (
    <div className="text-left">
      <div className="inline-flex border-[1.5px] border-cp-yellow border-opacity-50 bg-cp-bg">
        <div className="flex h-12 content-around gap-2 p-2">
          {buffer.map((o, i) => (
            <div
              className="h-6 w-6 self-center border border-dashed border-cp-border"
              key={i}
            >
              {o}
            </div>
          ))}
        </div>
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
