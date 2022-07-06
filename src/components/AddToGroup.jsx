import { useSelector } from "react-redux";

import { IconSelected, IconNotSelected } from "./icons";

const AddToGroup = () => {
  const { groupList } = useSelector((state) => state.groups);

  return (
    <div>
      <h4 className="text-md font-medium mb-2">Add to group</h4>

      <div className="flex flex-col gap-y-2">
        {groupList.map((group) => (
          <div key={group} className="bg-gray-100 bg-opacity-10 rounded-md py-2 px-2 flex cursor-pointer">
            <IconNotSelected />
            <span className="ml-4">{group}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddToGroup;
