import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NotFoundImage from "../assets/images/404.svg";
import Button from "../components/ui/Button";

export default function NotFound({ onHideMenu, onShowMenu }) {
  const navigate = useNavigate();

  useEffect(() => {
    onHideMenu();

    return () => {
      onShowMenu();
    };
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-orange-100 p-3 pb-12">
      <img src={NotFoundImage} className="w-[300px] h-[300px]" />

      <h2 className="text-orange text-3xl font-semibold mb-4">Oops!</h2>
      
      <p className="text-lg font-medium mb-4 text-center">
        We can't seem to find the page you are looking for
      </p>
      
      <Button title="Back to Home" onClick={() => navigate("home")} />
    </div>
  );
}
