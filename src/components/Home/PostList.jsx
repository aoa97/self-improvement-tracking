import { useSelector } from "react-redux";

import PostItem from "./PostItem";

export default function PostList({ mode, selGroup }) {
  const { thoughtList } = useSelector((state) => state.thought);
  const { visionList } = useSelector((state) => state.vision);
  let list = mode === "thought" ? thoughtList : visionList;

  if (selGroup !== "All") {
    list = list.filter((item) => item.groups.includes(selGroup));
  }

  if(thoughtList.length === 0 && visionList.length === 0) {
    return <h2>Empty</h2>
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
