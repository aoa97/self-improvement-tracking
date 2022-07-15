import { useState } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import store from "./redux/store";
import Menu from "./components/layout/Menu";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Focus from "./pages/Focus";
import NotFound from "./pages/NotFound";
import Connect from "./pages/Connect";
import Notifications from "./pages/Notifications";
import { Manage, Thoughts, Challenges, Emotions } from "./pages/manage";
import { Grow, Vision, Goals, Reflection } from "./pages/grow";

const App = () => {
  const [hideMenu, setHideMenu] = useState(false);

  const handleHideMenu = () => {
    setHideMenu(true);
  };

  const handleShowMenu = () => {
    setHideMenu(false);
  };

  return (
    <>
      <Provider store={store}>
        {!hideMenu && <Menu />}

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

          <Route path="/connect" element={<Connect />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/focus" element={<Focus />} />
          <Route path="/Home" element={<Home />} />
          <Route
            path="/"
            element={
              <Landing
                onHideMenu={handleHideMenu}
                onShowMenu={handleShowMenu}
              />
            }
          />
          <Route
            path="*"
            element={
              <NotFound
                onHideMenu={handleHideMenu}
                onShowMenu={handleShowMenu}
              />
            }
          />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
