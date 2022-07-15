import { useState } from "react";
import { useDispatch } from "react-redux";
import { Textarea } from "flowbite-react";

import { createThought } from "../../redux/slices/thoughtSlice";
import { createVision } from "../../redux/slices/visionSlice";
import Modal from "../ui/Modal";
import AddToGroup from "../ui/AddToGroup";
import ErrorMessage from "../ui/ErrorMessage";

export default function Create({ visible, onClose, mode }) {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState();
  const [text, setText] = useState("");
  const [selGroups, setSelGroups] = useState([]);

  const handleCreate = () => {
    setErrorMessage(null);
    if (text.length === 0) {
      setErrorMessage("You told nothing, Please type your thought.");
      return;
    }

    if (selGroups.length === 0) {
      setErrorMessage(
        "Please select at least one group to share your thought."
      );
      return;
    }

    if (mode === "thought") {
      dispatch(createThought({ description: text, groups: selGroups }));
    } else {
      dispatch(createVision({ description: text, groups: selGroups }));
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

      <AddToGroup
        onError={(error) => setErrorMessage(error)}
        onSelectGroup={handleSelectGroup}
        selGroups={selGroups}
      />

      <ErrorMessage className="mt-4">{errorMessage}</ErrorMessage>
    </Modal>
  );
}
