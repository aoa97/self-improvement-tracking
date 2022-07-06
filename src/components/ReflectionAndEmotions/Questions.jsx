import { useState } from "react";

import Button from "../../components/ui/Button";
import QuestionItem from "./QuestionItem";

export default function Questions() {
  const [index, setIndex] = useState(0);
  const [values, setValues] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const handleValuesChange = (field, e) => {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: e.target.value,
    }));
  };

  const handlePrevious = () => {
    setIndex((ci) => ci - 1);
  };

  const handleNext = () => {
    setIndex((ci) => ci + 1);
  };

  const handleSubmit = () => {
    console.log(values);
  };

  return (
    <div className="flex h-[70vh]">
      <div className="bg-orange-100 bg-opacity-25 w-full flex flex-col justify-between rounded-md overflow-hidden">
        {index === 0 && (
          <>
            <div className="flex-1 flex items-center">
              <p className="flex-1 text-center font-medium md:text-lg">
                Let's reflect on a recent event and manage our emotions and learnings.
              </p>
            </div>

            <Button onClick={handleNext} className="w-full py-3" title="Next" />
          </>
        )}

        {index === 1 && (
          <QuestionItem
            title="1- What  happened?"
            placeholder="Write some words here to say what happened..."
            onChange={handleValuesChange.bind(this, "first")}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        )}

        {index === 2 && (
          <QuestionItem
            title="2- How does that make you feel?"
            placeholder="Write down how did you feel during and after the event..."
            value={values.second}
            onChange={handleValuesChange.bind(this, "second")}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        )}

        {index === 3 && (
          <QuestionItem
            title="3- Why did you feel this way?"
            placeholder="Write down how did you feel during and after the event..."
            value={values.third}
            onChange={handleValuesChange.bind(this, "third")}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        )}

        {index === 4 && (
          <QuestionItem
            type="Submit"
            title="4- What can you learn from this?"
            placeholder="Write down the lessons you have learned..."
            value={values.fourth}
            onChange={handleValuesChange.bind(this, "fourth")}
            onPrevious={handlePrevious}
            onNext={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
