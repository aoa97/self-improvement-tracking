import { useSelector } from "react-redux";

import Item from "./Item";

export default function ChallengeList({ mode }) {
  const list = useSelector((state) => {
    if (mode === "challenge") {
      return state.challenge.challengeList;
    } else {
      return state.goal.goalList;
    }
  });

  return (
    <section className="grid gap-4 md:w-3/5">
      {list.map((item) => (
        <Item mode={mode} key={item.id} item={item} />
      ))}
    </section>
  );
}
