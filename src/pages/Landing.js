import { useNavigate } from "react-router-dom";

import landingData from "../constants/data/landing-data";

const Landing = () => {
  const nav = useNavigate();

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-semibold">Start Your Journey</h1>

      <p className="text-xl my-4">
        Our goal is to help you grow into your best self with a life filled with
        success, happiness and worth.
      </p>

      <h2 className="text-lg font-medium mb-4 text-orange">
        What are you most interested in at the moment?
      </h2>

      {/* Buttons Group */}
      <div className="grid lg:grid-cols-2 gap-4">
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
              <span className="text-xl font-medium flex mb-2">
                {item.title}
              </span>

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
    </div>
  );
};

export default Landing;
