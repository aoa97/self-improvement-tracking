import { useDispatch } from "react-redux";

import IconButton from "./../ui/IconButton";
import { IconCheck } from "../icons";
import { getDateMinusDate } from "../../utils/date";
import { toggleCompleteChallenge } from "../../redux/slices/challengeSlice";
import { toggleCompleteGoal } from "../../redux/slices/goalSlice";

export default function Item({ item, mode }) {
  const dispatch = useDispatch();

  const handleItemPress = () => {
    if (mode === "challenge") {
      dispatch(toggleCompleteChallenge(item.id));
    } else {
      dispatch(toggleCompleteGoal(item.id));
    }
  };

  return (
    <article className="border rounded-md p-3 flex gap-x-3">
      <IconButton
        className="h-fit"
        icon={<IconCheck active={+item.completed} />}
        onClick={handleItemPress}
      />

      <div className="content w-fit">
        <h4 className="text-lg">{item.title}</h4>

        <span className="text-sm text-gray-100">
          {getDateMinusDate(item.date)}
        </span>

        <p className="text-xs text-gray">{item.description}</p>
      </div>
    </article>
  );
}
