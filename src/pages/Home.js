import { useSelector } from "react-redux";

import JournalItem from "../components/Journal";
import Container from "../components/layout/Container";
import TimelineList from "../components/timeline/TimelineList";

const Home = () => {
  const { groupList } = useSelector((state) => state.groups);

  return (
    <Container>
      <nav className="text-center text-gray border-b flex justify-evenly mb-5">
        {groupList.map((item) => (
          <div
            key={item.title}
            className={`${
              item.active
                ? "text-orange font-medium border-b-2 border-orange"
                : ""
            }`}
          >
            <p className="px-2 mb-2">{item.title}</p>
          </div>
        ))}
      </nav>

      <div className="flex flex-col md:flex-row gap-y-3">
        <div className="md:w-3/5 flex flex-col pb-2 border-b md:pb-0 md:border-b-0 md:pr-2 md:border-r">
          <JournalItem />
        </div>

        <div className="md:w-2/5 flex flex-col pl-2">
          <TimelineList />
        </div>
      </div>
    </Container>
  );
};

export default Home;
