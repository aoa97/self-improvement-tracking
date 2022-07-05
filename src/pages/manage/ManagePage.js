import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Container from "../../components/layout/Container";

const tabs = ["Thoughts", "Challenges", "Emotions"];

const Manage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/manage/thoughts");
  }, []);

  return (
    <Container>
      <nav className="text-center text-gray border-b flex justify-evenly mb-5">
        {tabs.map((tab) => (
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

      <Outlet />
    </Container>
  );
};
export default Manage;
