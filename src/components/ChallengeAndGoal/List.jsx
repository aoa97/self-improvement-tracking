import { useSelector } from "react-redux";

import Item from "./Item";
import Alert from "../ui/Alert";

export default function ChallengeList({ mode }) {
  const list = useSelector((state) => {
    if (mode === "challenge") {
      return state.challenge.challengeList;
    } else {
      return state.goal.goalList;
    }
  });

  if (list.length === 0) {
    return (
      <Alert
        className="w-1/2"
        message={`Your ${mode}s list is empty, Create your first one.`}
      />
    );
  }

  return (
    <section className="grid gap-4 md:w-3/5">
      {list.map((item) => (
        <Item mode={mode} key={item.id} item={item} />
      ))}
    </section>
  );
}
