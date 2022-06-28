import { Textarea } from "flowbite-react";

const Thoughts = () => {
  return (
    <div>
      <h2 className="text-2xl font-medium">Managing our thoughts</h2>

      <p className="my-4 md:text-lg">
        Managing our life starts with managing our thoughts. Healthy thoughts
        drive a healthy life, and heavy baggage slows us down. Use the space
        below to either journal your thoughts to lighten the load, or use it as
        a blank canvas to write down your affirmations, positive thoughts and
        message of support that will help you change the dialogue for the
        better.
      </p>

      <Textarea
        rows={6}
        placeholder="What's happening in your life?"
        className="mb-5 w-full p-3 focus:outline-orange-200"
      />
    </div>
  );
};

export default Thoughts;
