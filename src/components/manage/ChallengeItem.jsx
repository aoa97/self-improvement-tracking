import { IconCheck } from "../../components/icons";

const ChallengeItem = ({ item }) => {
  return (
    <article className="border rounded-md p-3 flex justify-between gap-x-3">
      <button className="h-fit">
        <IconCheck active={+item.completed} />
      </button>

      <div className="content w-fit">
        <h4 className="text-lg">{item.title}</h4>

        <span className="text-sm text-gray-100">{item.date}</span>

        <p className="text-xs text-gray">{item.description}</p>
      </div>
    </article>
  );
};

export default ChallengeItem;
