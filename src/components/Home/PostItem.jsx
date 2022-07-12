import moment from "moment";

export default function PostItem({ title, item }) {
  return (
    <article className="mb-3 pb-3 border-b">
      <div className="flex justify-between items-center">
        <h5 className="text-lg text-gray font-semibold">{title}</h5>

        <time className="text-xs text-gray-100">
          {moment(item.createdAt).fromNow()}
        </time>
      </div>

      <p className="text-sm md:text-base mb-1">{item.description}</p>
      {/* <img className="w-full" src={require("../../assets/journal-image.png")} /> */}
    </article>
  );
}
