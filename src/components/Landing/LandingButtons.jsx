import { useNavigate } from "react-router-dom";

import landingData from "../../constants/data/landing-data";

export default function LandingButtons({ ...props }) {
  const nav = useNavigate();

  return (
    <div {...props}>
      {landingData.map((item, i) => (
        <button
          key={i}
          onClick={() => nav(item.path)}
          className="bg-orange-100 rounded-md px-3 py-5 flex items-center hover:bg-orange-200 hover:translate-y-1 transition-all"
        >
          <div className="landing-ico rounded-full flex bg-white p-6 mr-3">
            {item.icon}
          </div>

          <div>
            <span className="text-xl font-medium flex mb-2">{item.title}</span>

            <div className="flex flex-wrap gap-x-2 gap-y-3">
              {item.data.map((meta, i) => (
                <span
                  key={i}
                  className="bg-orange text-white text-sm font-medium px-2.5 py-0.5 rounded"
                >
                  {meta}
                </span>
              ))}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
