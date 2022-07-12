import { useState } from "react";

import Container from "../components/layout/Container";
import TimelineList from "../components/Home/TimelineList";
import PostList from "../components/Home/PostList";
import GroupTabs from "../components/Home/GroupTabs";

export default function Home() {
  const [selGroup, setSelGroup] = useState("All");

  return (
    <Container>
      <GroupTabs
        selGroup={selGroup}
        onSelectGroup={(group) => setSelGroup(group)}
      />

      <div className="flex flex-col md:flex-row gap-y-3">
        <div className="md:w-3/5 flex flex-col pb-2 border-b md:pb-0 md:border-b-0 md:pr-2">
          <PostList mode="thought" selGroup={selGroup} />
          <PostList mode="vision" selGroup={selGroup} />
        </div>

        <div className="md:w-2/5 flex flex-col pl-2">
          <TimelineList mode="challenge" selGroup={selGroup} />
          <TimelineList mode="goal" selGroup={selGroup} />
        </div>
      </div>
    </Container>
  );
}
