import { useSelector } from "react-redux";

import { IconSelected, IconNotSelected } from "../icons";

export default function AddToGroup({ onSelectGroup, selGroups }) {
  const { groupList } = useSelector((state) => state.groups);

  return (
    <div>
      <h4 className="text-md font-medium mb-2">Add to group</h4>

      <div className="flex flex-col gap-y-1">
        {groupList.map((group) => (
          <button
            key={group}
            onClick={onSelectGroup.bind(this, group)}
            className="bg-gray-100 bg-opacity-10 rounded-md py-2 px-2 flex cursor-pointer"
          >
            {selGroups.includes(group) ? <IconSelected /> : <IconNotSelected />}
            <span className="ml-4">{group}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
