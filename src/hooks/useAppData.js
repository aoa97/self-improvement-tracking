import { useSelector } from "react-redux";

export default function useAppData() {
  const thoughtList = useSelector((state) => state.thought.thoughtList);
  const visionList = useSelector((state) => state.vision.visionList);
  const goalList = useSelector((state) => state.goal.goalList);
  const challengeList = useSelector((state) => state.challenge.challengeList);

  const isAvailableData = () => {
    return (
      thoughtList.length > 0 ||
      visionList > 0 ||
      goalList > 0 ||
      challengeList > 0
    );
  };

  return {
    isAvailableData: isAvailableData(),
  };
}
