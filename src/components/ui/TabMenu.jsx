import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function TabMenu({ list }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/grow/vision");
  }, []);

  return (
    <nav className="text-center text-gray border-b flex justify-evenly mb-5">
      {list.map((tab) => (
        <NavLink
          key={tab}
          to={tab.toLowerCase()}
          className={({ isActive }) =>
            isActive
              ? "text-orange font-medium border-b-2 border-orange"
              : undefined
          }
        >
          <p className="px-2 mb-2">{tab}</p>
        </NavLink>
      ))}
    </nav>
  );
}
