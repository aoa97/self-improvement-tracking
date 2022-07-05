import { Outlet } from "react-router-dom";
import Container from "../../components/layout/Container";
import TabMenu from "../../components/TabMenu";

const tabs = ["Vision", "Goals", "Reflection"];

const Grow = () => {
  return (
    <Container>
      <TabMenu list={tabs} />

      <Outlet />
    </Container>
  );
};

export default Grow;
