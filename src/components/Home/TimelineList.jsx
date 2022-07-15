import { useSelector } from "react-redux";

import TimelineItem from "./TimelineItem";

export default function TimelineList({ mode, selGroup }) {
  const { challengeList } = useSelector((state) => state.challenge);
  const { goalList } = useSelector((state) => state.goal);
  let list = mode === "challenge" ? challengeList : goalList;

  if (selGroup !== "All") {
    list = list.filter((item) => item.groups.includes(selGroup));
  }

  if(list.length === 0) {
    return null;
  }

  return (
    <>
      <div>
        <h5 className="mb-3 text-lg text-gray font-semibold">
          {mode === "challenge" ? "Challenges" : "Goals"}
        </h5>

        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {list.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </ol>
      </div>
    </>
  );
}
