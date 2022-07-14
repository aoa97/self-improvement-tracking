import { useEffect } from "react";

import LandingButtons from "../components/Landing/LandingButtons";

const Landing = ({ onHideMenu, onShowMenu }) => {
  useEffect(() => {
    onHideMenu();

    return () => {
      onShowMenu();
    };
  }, []);

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

      <LandingButtons className="grid lg:grid-cols-2 gap-4" />
    </div>
  );
};

export default Landing;
