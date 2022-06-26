import { NavLink } from "react-router-dom";
import { menuData } from "../utils/data";

const Menu = () => {
  return (
    <aside className="w-[50px] fixed top-0 left-0 h-full shadow-card md:w-[70px]">
      <nav className="gap-y-10 py-5 bg-white flex flex-col">
        {menuData.map((x, i) => (
          <NavLink
            className={({ isActive }) => (isActive ? "menu-active" : undefined)}
            to={x.path}
            key={i}
          >
            <div className="flex flex-col gap-y-2 items-center">
              {x.icon}
            </div>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Menu;
