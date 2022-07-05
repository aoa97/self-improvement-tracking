const JournalItem = () => {
  return (
    <article>
      <div className="flex justify-between">
        <h5 className="text-lg text-gray font-semibold">Journal</h5>
        <span className="text-xs text-gray-100">6 minutes ago</span>
      </div>

      <p className="text-sm md:text-base mb-1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </p>

      <img className="w-full" src={require("../assets/journal-image.png")} />
    </article>
  );
};

export default JournalItem;
