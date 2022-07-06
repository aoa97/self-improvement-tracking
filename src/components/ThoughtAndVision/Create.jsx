import { useState } from "react";
import { useDispatch } from "react-redux";
import { Textarea } from "flowbite-react";

import { createThought } from "../../redux/slices/thoughtSlice";
import { createVision } from "../../redux/slices/visionSlice";
import Modal from "../ui/Modal";
import AddToGroup from "../AddToGroup";

export default function Create({ visible, onClose, mode }) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleCreate = () => {
    if (mode === "thought") {
      dispatch(createThought({ journal: text }));
    } else {
      console.log(text);
      dispatch(createVision({ vision: text }));
    }
    setText("");
    onClose();
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
      <AddToGroup />
    </Modal>
  );
}
