import { Modal, TextInput, Textarea } from "flowbite-react";
import Button from "../Button";
import { IconNotSelected, IconSelected } from "../icons/index";

const CreateChallenge = ({ visible, onClose }) => {
  return (
    <Modal show={visible} onClose={onClose}>
      <Modal.Header>Create a new challenge</Modal.Header>

      <Modal.Body>
        <TextInput
          placeholder="Title"
          required={true}
          className="mb-5 focus:outline-orange-200"
        />

        <Textarea
          placeholder="Description"
          required={true}
          className="mb-5 p-3 focus:outline-orange-200"
        />

        <TextInput
          placeholder="Select date"
          required={true}
          type="datetime-local"
          className="mb-5 focus:outline-orange-200"
        />

        <h4 className="text-lg font-medium mb-5">Add to group</h4>
        <div className="flex flex-col gap-y-5">
          <div className="shadow-md rounded-md p-3 flex justify-between bg-orange-200 cursor-pointer">
            <span className="font-medium">Family</span>
            <IconSelected />
          </div>
          <div className="shadow-md rounded-md p-3 flex justify-between cursor-pointer">
            <span className="">Work</span>
            <IconNotSelected />
          </div>
          <div className="shadow-md rounded-md p-3 flex justify-between cursor-pointer">
            <span className="">Friends</span>
            <IconNotSelected />
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button className="px-5" title="Create" />
      </Modal.Footer>
    </Modal>
  );
};

export default CreateChallenge;
