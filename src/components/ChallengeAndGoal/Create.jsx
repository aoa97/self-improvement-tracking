import { useState } from "react";
import { useDispatch } from "react-redux";
import { Textarea } from "flowbite-react";

import AddToGroup from "../ui/AddToGroup";
import TextInput from "../ui/TextInput";
import Modal from "../ui/Modal";
import ErrorMessage from "../ui/ErrorMessage";
import { addChallenge } from "../../redux/slices/challengeSlice";
import { addgoal } from "../../redux/slices/goalSlice";

export default function CreateChallenge({ visible, onClose, mode }) {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState();
  const [values, setValues] = useState({
    title: "",
    description: "",
    date: "",
  });
  const [selGroups, setSelGroups] = useState([]);

  const handleInputChange = (field, e) => {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: e.target.value,
    }));
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

  const handleSubmit = () => {
    setErrorMessage(null);
    if (
      values.title.length === 0 ||
      values.description.length === 0 ||
      values.date.length === 0
    ) {
      setErrorMessage("Please complete the entire fields.");
      return;
    }

    if (selGroups.length === 0) {
      setErrorMessage("Please select at least one group.");
      return;
    }

    if (mode === "challenge") {
      dispatch(addChallenge({ ...values, groups: selGroups }));
    } else {
      dispatch(addgoal({ ...values, groups: selGroups }));
    }
    setValues({
      title: "",
      description: "",
      date: "",
    });
    onClose();
  };

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title={mode === "challenge" ? "Create a challenge" : "Create a goal"}
      onSubmit={handleSubmit}
    >
      <TextInput
        className="mb-5"
        placeholder="Title"
        required={true}
        value={values.title}
        onChange={handleInputChange.bind(this, "title")}
      />
      <Textarea
        className="mb-5 p-3 focus:outline-orange-200"
        placeholder="Description"
        required={true}
        value={values.description}
        onChange={handleInputChange.bind(this, "description")}
      />
      <TextInput
        className="mb-5"
        placeholder="Select date"
        required={true}
        type="date"
        value={values.date}
        onChange={handleInputChange.bind(this, "date")}
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
