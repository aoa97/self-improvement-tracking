import { useState } from "react";
import { useDispatch } from "react-redux";
import { Textarea } from "flowbite-react";

import { createThought } from "../../redux/slices/thoughtSlice";
import { createVision } from "../../redux/slices/visionSlice";
import Modal from "../ui/Modal";
import AddToGroup from "../ui/AddToGroup";

export default function Create({ visible, onClose, mode }) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [selGroups, setSelGroups] = useState([]);

  const handleCreate = () => {
    if (mode === "thought") {
      dispatch(createThought({ description: text, selGroups }));
    } else {
      dispatch(createVision({ description: text, selGroups }));
    }
    setText("");
    onClose();
  };

  const handleSelectGroup = (title) => {
    if (selGroups.includes(title)) {
      setSelGroups((curGroups) => curGroups.filter((item) => item !== title));
    } else {
      setSelGroups((curGroups) => {
        if (!curGroups.includes(title)) {
          return [...curGroups, title];
        }
      });
    }
  };

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      onSubmit={handleCreate}
      title={mode === "thought" ? "Create a thought" : "Create a vision"}
    >
      <Textarea
        rows={6}
        placeholder={
          mode === "thought"
            ? "What's happening in your life?"
            : "Draw your vision"
        }
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="mb-5 w-full p-3 focus:outline-orange-200"
      />

      <AddToGroup onSelectGroup={handleSelectGroup} selGroups={selGroups} />
    </Modal>
  );
}
