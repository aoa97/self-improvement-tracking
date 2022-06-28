import { Route, Routes, useLocation } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Focus from "./pages/Focus";
import { Manage, Thoughts, Challenges, Emotions } from "./pages/manage";
import { Grow, Vision, Goals, Reflection } from "./pages/grow";

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Menu />}

      <Routes>
        {/* Manage Routes */}
        <Route path="manage" element={<Manage />}>
          <Route index element={<Thoughts />} />
          <Route path="thoughts" element={<Thoughts />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="emotions" element={<Emotions />} />
        </Route>

        {/* Grow Routes */}
        <Route path="grow" element={<Grow />}>
          <Route index element={<Vision />} />
          <Route path="vision" element={<Vision />} />
          <Route path="goals" element={<Goals />} />
          <Route path="reflection" element={<Reflection />} />
        </Route>

        <Route path="/focus" element={<Focus />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </>
  );
};

export default App;
