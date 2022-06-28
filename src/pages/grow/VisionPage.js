import { Textarea } from "flowbite-react";

const Vision = () => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-medium">It’s an oppurtunity</h2>

      <p className="mb-4 md:text-lg">
        Every day is an opportunity to take steps towards your goals and achieve
        your goals and achieve your objectives.
      </p>

      <h3 className="mb-4 text-xl text-orange font-medium">Imagine the possibilities</h3>

      <Textarea
        rows={5}
        placeholder="What's happening in your life?"
        className="mb-5 w-full p-3 focus:outline-orange-200"
      />
    </div>
  );
};

export default Vision;
