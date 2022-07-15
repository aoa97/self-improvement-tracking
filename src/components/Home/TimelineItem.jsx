import moment from 'moment';

export default function TimelineItem({ item }) {
  return (
    <li className="mb-3 ml-4" key={item.id}>
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {moment(new Date(item.date)).fromNow()} from now
      </time>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {item.title}
      </h3>

      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {item.description}
      </p>
    </li>
  );
}
