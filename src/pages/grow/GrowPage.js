import { Outlet } from "react-router-dom";
import Container from "../../components/layout/Container";
import TabMenu from "../../components/ui/TabMenu";

const tabs = ["Vision", "Goals", "Reflection"];

export default function Grow() {
  return (
    <Container>
      <TabMenu list={tabs} />
      <Outlet />
    </Container>
  );
}
