import { useState } from "react";

import { IconPlus } from "../../components/icons";
import Button from "../../components/ui/Button";
import Create from "../../components/ChallengeAndGoal/Create";
import List from "../../components/ChallengeAndGoal/List";

export default function Challenges() {
  const [createVisible, setCreateVisible] = useState(false);

  const handleOpenModal = () => {
    setCreateVisible(true);
  };

  const handleCloseModal = () => {
    setCreateVisible(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-medium">Being held back?</h2>

      <p className="my-4 text-justify md:text-lg">
        Sometimes we find ourselves in situations that are challenging our
        progress. To get unstuck, it is helpful identify what is holding us back
        before thinking about how to over come it.
      </p>

      <h3 className="text-xl mb-4">Your Challenges</h3>

      {/* Create Challenge (Floated Btn)  */}
      <Button
        className="fixed bottom-10 right-10"
        onClick={handleOpenModal}
        title="New Challenge"
        icon={<IconPlus />}
      />
      <Create
        mode="challenge"
        visible={createVisible}
        onClose={handleCloseModal}
      />

      <List mode="challenge" />
    </div>
  );
}
