import { useState } from "react";
import { useDispatch } from "react-redux";
import { Textarea } from "flowbite-react";

import AddToGroup from "../AddToGroup";
import TextInput from "../ui/TextInput";
import Modal from "../ui/Modal";
import { addChallenge } from "../../redux/slices/challengeSlice";

export default function CreateChallenge({ visible, onClose }) {
  const dispatch = useDispatch();
  const [challengeData, setChallengeData] = useState({});

  const handleInputChange = (field, e) => {
    setChallengeData((currentValues) => ({
      ...currentValues,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    dispatch(addChallenge({ ...challengeData }));
  };

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title=" Create a challenge"
      onSubmit={handleSubmit}
    >
      <TextInput
        className="mb-5"
        placeholder="Title"
        required={true}
        value={challengeData.title}
        onChange={handleInputChange.bind(this, "title")}
      />
      <Textarea
        className="mb-5 p-3 focus:outline-orange-200"
        placeholder="Description"
        required={true}
        value={challengeData.description}
        onChange={handleInputChange.bind(this, "description")}
      />
      <TextInput
        className="mb-5"
        placeholder="Select date"
        required={true}
        type="datetime-local"
        value={challengeData.date}
        onChange={handleInputChange.bind(this, "date")}
      />

      <AddToGroup />
    </Modal>
  );
}
