import { NavLink } from "react-router-dom";

import menuData from "../../constants/data/menu-data";

const Menu = () => {
  return (
    <aside className="w-[60px] fixed left-0 h-full lg:w-[240px] xs:w-full xs:h-auto xs:bottom-0">
      <nav className="gap-y-4 py-5 px-2 h-full bg-white shadow-card flex flex-col lg:px-3 xs:py-2 xs:flex-row xs:justify-between">
        {menuData.map((x, i) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "menu-item rounded-md active" : "menu-item"
            }
            to={x.path}
            key={i}
          >
            <div className="group flex items-center justify-center p-2 gap-x-5 lg:justify-start lg:py-3 lg:px-4 transition-all ease-in-out hover:bg-orange-100 hover:lg:translate-x-1 ">
              <span>{x.icon}</span>

              <span className="d-none text-gray group-hover:text-orange relative top-0.5 lg:block">
                {x.title}
              </span>
            </div>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Menu;