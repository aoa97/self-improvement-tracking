import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import ErrorMessage from "../ui/ErrorMessage";
import { addFocusItem } from "../../redux/slices/focusSlice";

export default function FocusForm() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    setErrorMessage(null);

    if (text.length === 0) {
      setErrorMessage("Please enter something to focus.");
      return;
    }

    dispatch(addFocusItem(text));
  };

  return (
    <>
      <div className="flex gap-x-3 mb-4">
        <TextInput
          placeholder="Add something .."
          required={true}
          value={text}
          onChange={handleTextChange}
        />

        <Button className="px-8" title="Add" onClick={handleSubmit} />
      </div>

      <ErrorMessage className="my-4">{errorMessage}</ErrorMessage>
    </>
  );
}
