import { useState } from "react";
import { Textarea } from "flowbite-react";

import Modal from "../ui/Modal";
import AddToGroup from "../AddToGroup";

const CreateThought = ({ visible, onClose }) => {
  const [thoughtText, setThoughtText] = useState("");

  const handleCreateThought = () => {
    console.log(thoughtText);
  };

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      onSubmit={handleCreateThought}
      title="Create a thought"
    >
      <Textarea
        rows={6}
        placeholder="What's happening in your life?"
        value={thoughtText}
        onChange={(e) => setThoughtText(e.target.value)}
        className="mb-5 w-full p-3 focus:outline-orange-200"
      />

      <AddToGroup />
    </Modal>
  );
};

export default CreateThought;
