import { Textarea } from "flowbite-react";

import Button from "../../components/ui/Button";

export default function QuestionItem({
  type,
  title,
  placeholder,
  value,
  onChange,
  onPrevious,
  onNext,
}) {
  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-evenly p-3">
        <h2 className="text-lg md:text-xl">{title}</h2>

        <Textarea
          rows={8}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full p-3 focus:outline-orange-200"
        />
      </div>

      <div className="flex">
        <Button
          color="secondary"
          className="flex-1 rounded-none py-3"
          title="Previous"
          onClick={onPrevious}
        />
        <Button
          className="flex-1 rounded-none py-3"
          title={type === "Submit" ? "Submit" : "Next"}
          onClick={onNext}
        />
      </div>
    </>
  );
}
