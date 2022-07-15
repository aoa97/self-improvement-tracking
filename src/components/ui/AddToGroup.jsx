import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IconSelected, IconNotSelected } from "../icons";
import { addGroup } from "../../redux/slices/groupsSlice";
import Button from "./Button";
import TextInput from "./TextInput";

export default function AddToGroup({ onError, onSelectGroup, selGroups }) {
  const dispatch = useDispatch();
  const [createVisible, setCreateVisible] = useState(false);
  const [newGroup, setNewGroup] = useState("");
  const { groupList } = useSelector((state) => state.groups);

  const handleCreateVisible = () => {
    setCreateVisible(!createVisible);
  };

  const handleNewGroupChange = (e) => {
    setNewGroup(e.target.value);
  };

  const handleNewGroupSubmit = () => {
    onError(null);

    if (newGroup.length === 0) {
      onError("Please enter a valid group name.");
      return;
    }

    if (groupList.includes(newGroup)) {
      onError("The group name already exists.");
      return;
    }
    dispatch(addGroup(newGroup));
    setNewGroup("");
  };

  return (
    <div>
      <h4 className="text-md font-medium c">Add to group</h4>

      <div className="flex flex-col gap-y-1 mb-2">
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

      <Button
        mode="link"
        title="+ Create a new group"
        onClick={handleCreateVisible}
      />

      {createVisible && (
        <>
          <div className="flex items-center justify-center gap-x-3 my-2">
            <TextInput
              className="w-2"
              placeholder="Enter group name"
              value={newGroup}
              onChange={handleNewGroupChange}
            />
            <Button title="Save" onClick={handleNewGroupSubmit} />
          </div>
        </>
      )}
    </div>
  );
}
