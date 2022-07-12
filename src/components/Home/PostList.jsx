import { useSelector } from "react-redux";

import PostItem from "./PostItem";

export default function PostList({ mode, selGroup }) {
  const { thoughtList } = useSelector((state) => state.thought);
  const { visionList } = useSelector((state) => state.vision);
  let list = mode === "thought" ? thoughtList : visionList;

  if (selGroup !== "All") {
    list = list.filter((item) => item.groups.includes(selGroup));
  }

  return (
    <>
      {list.map((item) => (
        <PostItem
          key={item.id}
          item={item}
          title={mode === "thought" ? "Journal" : "Vision"}
        />
      ))}
    </>
  );
}
