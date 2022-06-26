import { IconCheck, IconPlus } from "../../components/icons";

const Challenges = () => {
  return (
    <div>
      <h2 className="text-2xl">Being held back?</h2>

      <p className="my-4 text-justify md:text-lg">
        Sometimes we find ourselves in situations that are challenging our
        progress. To get unstuck, it is helpful identify what is holding us back
        before thinking about how to over come it.
      </p>

      <h3 className="text-xl mb-4">Your Challenges</h3>

      <button className="rounded-md bg-orange text-white font-semibold flex justify-center fixed bottom-10 right-10 p-2">
        <IconPlus />
        New Challenge
      </button>

      <section className="grid grid-cols-1 gap-4 md:w-1/2">
        <article className="border rounded-md p-3 flex gap-x-3">
          <IconCheck />

          <div className="content">
            <h4 className="text-lg">This is a completed challenge</h4>
            <span className="text-sm text-gray-100">7 days remaining</span>
            <p className="text-xs text-gray">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Challenges;
