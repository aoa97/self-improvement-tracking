import Container from "../../components/Container";

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

      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 rounded-md border border-gray-100 focus:border-orange-100 md:w-1/2"
        placeholder="What's happening in your life?"
      ></textarea>
    </div>
  );
};

export default Thoughts;
