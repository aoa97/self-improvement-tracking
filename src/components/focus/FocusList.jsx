import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Alert from "../ui/Alert";
import IconButton from "../ui/IconButton";
import { IconNotSelected, IconSelected } from "../icons";
import { toggleCompleteItem } from "../../redux/slices/focusSlice";

export default function FocusList() {
  const dispatch = useDispatch();
  const { focusList } = useSelector((state) => state.focus);

  const handleItemToggle = (id) => {
    dispatch(toggleCompleteItem(id));
  };

  if (focusList.length === 0) {
    return <Alert message="Your focus list is empty, Create your first one." />;
  }

  return (
    <ul className="flex flex-col gap-y-3">
      {focusList.map((item) => (
        <li
          key={item.id}
          className="bg-gray-100 bg-opacity-10 rounded-md p-3 text-lg flex items-center gap-x-3 hover:bg-orange-100 hover:translate-y-1 transition-all cursor-pointer"
        >
          <IconButton
            onClick={handleItemToggle.bind(this, item.id)}
            icon={item.completed ? <IconSelected /> : <IconNotSelected />}
          />
          {item.text}
        </li>
      ))}
    </ul>
  );
}