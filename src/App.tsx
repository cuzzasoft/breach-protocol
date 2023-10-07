import { BreachTime } from './breach-time';
import { Buffer, BufferHeading } from './buffer';
import { CodeMatrix } from './code-matrix';
import { Sequence } from './sequence';

const App = () => {
  return (
    <div className="text-center bg-cp-bg text-cp-text p-12 min-h-screen font-blender font-thin text-lg">
      <div className="border-2 border-cp-border px-1">
        <div className="border-x border-cp-border px-2">
          <div className="border-x border-cp-border px-4">
            <div className="border-x border-cp-border px-4 pb-4">
              <div className="flex gap-4 pb-1">
                <div className="w-2/5"></div>
                <div className="w-3/5">
                  <BufferHeading />
                </div>
              </div>
              {/* todo: implement full-bleed properly*/}
              <div className="flex gap-4 bg-cp-header-bg py-1 border-t border-b border-r border-cp-border full-bleed">
                <div className="w-2/5">
                  <BreachTime />
                </div>
                <div className="w-3/5">
                  <Buffer />
                </div>
              </div>
              <div className="flex gap-4 pt-4">
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
    </div>
  );
};

export default App;
