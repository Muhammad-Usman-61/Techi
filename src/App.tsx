import "./App.css";

function App() {
  return (
    <>
      <div className="h-[960px] overflow-hidden">
        <div className="grid grid-cols-2 overflow-y-auto h-full">
          <div className="flex gap-2 flex-wrap h-fit">
            <div className="min-w-80 h-40 bg-slate-500"></div>
            <div className="min-w-80 h-40 bg-slate-500"></div>
            <div className="min-w-80 h-40 bg-slate-500"></div>
            <div className="min-w-80 h-40 bg-slate-500"></div>
            <div className="min-w-80 h-40 bg-slate-500"></div>
            <div className="min-w-80 h-40 bg-slate-500"></div>
            <div className="min-w-80 h-40 bg-slate-500"></div>
            <div className="min-w-80 h-40 bg-slate-500"></div>
            <div className="min-w-80 h-40 bg-slate-500"></div>
            <div className="min-w-80 h-40 bg-slate-500"></div>
            <div className="min-w-80 h-40 bg-slate-500"></div>
            <div className="min-w-80 h-40 bg-slate-500"></div>
            <div className="min-w-80 h-40 bg-slate-500"></div>
            <div className="min-w-80 h-40 bg-slate-500"></div>
            <div className="min-w-80 h-40 bg-slate-500"></div>
            <div className="min-w-80 h-40 bg-slate-500"></div>
            <div className="min-w-80 h-40 bg-slate-500"></div>
            <div className="min-w-80 h-40 bg-slate-500"></div>
            <div className="min-w-80 h-40 bg-slate-500"></div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="78"
          height="78"
          viewBox="0 0 78 78"
        >
          <defs>
            <filter
              id="Ellipse_1318"
              x="0"
              y="0"
              width="78"
              height="78"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="3" in="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g
            id="Group_41118"
            data-name="Group 41118"
            transform="translate(-149 -452)"
          >
            <g
              transform="matrix(1, 0, 0, 1, 149, 452)"
              filter="url(#Ellipse_1318)"
            >
              <circle
                id="Ellipse_1318-2"
                data-name="Ellipse 1318"
                cx="30"
                cy="30"
                r="30"
                transform="translate(9 6)"
                fill="rgb(var(--color-text-white))"
                opacity="0.50"
                style={{
                  fill: "rgb(var(--color-text-white))",
                }}
              />
            </g>
            <g
              id="Group_40947"
              data-name="Group 40947"
              transform="translate(147.165 444.263)"
            >
              <path
                id="Path_34510"
                data-name="Path 34510"
                d="M55.569,36.135a14.735,14.735,0,0,0-29.469,0c0,8.162,14.735,23.4,14.735,23.4S55.569,44.3,55.569,36.135Zm-21.6-.289a6.862,6.862,0,1,1,6.862,6.862A6.905,6.905,0,0,1,33.973,35.846Z"
                fill="#ff1c31"
              />
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}

export default App;
