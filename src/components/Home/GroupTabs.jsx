import { useSelector } from "react-redux";

export default function GroupTabs({ selGroup, onSelectGroup }) {
  const { groupList } = useSelector((state) => state.groups);

  const handleActiveItem = (group) => {
    if (group === selGroup) {
      return "text-orange font-medium border-b-2 border-orange";
    }
    return "";
  };

  return (
    <nav className="text-center text-gray border-b flex justify-evenly mb-5">
      {["All", ...groupList].map((group) => (
        <button
          key={group}
          onClick={onSelectGroup.bind(this, group)}
          className={handleActiveItem(group)}
        >
          <p className="px-2 mb-2">{group}</p>
        </button>
      ))}
    </nav>
  );
}
