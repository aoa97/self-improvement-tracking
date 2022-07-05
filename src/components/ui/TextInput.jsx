import { TextInput } from "flowbite-react";

const Input = ({ className, ...args }) => {
  return (
    <div className={`flex-1 ${className}`}>
      <TextInput {...args} className="focus:outline-orange-200 " />
    </div>
  );
};

export default Input;
