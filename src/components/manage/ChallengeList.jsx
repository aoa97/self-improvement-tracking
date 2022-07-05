import { useSelector } from "react-redux";

import ChallengeItem from "./ChallengeItem";

export default function ChallengeList() {
  const { challengeList } = useSelector((state) => state.challenge);

  return (
    <section className="grid gap-4 md:w-3/5">
      {challengeList.map((item) => (
        <ChallengeItem key={item.id} item={item} />
      ))}
    </section>
  );
}
