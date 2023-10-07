import { BreachTime } from './breach-time';
import { Buffer, BufferHeading } from './buffer';
import { CodeMatrix } from './code-matrix';
import { Sequence } from './sequence';

const App = () => {
  return (
    <div className="min-h-screen bg-cp-bg p-12 text-center font-blender text-lg font-thin text-cp-text">
      <div className="border-2 border-cp-border px-1">
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
    </div>
  );
};

export default App;
