export default function Alert({ message, className, ...props }) {
  return (
    <div
      {...props}
      className={`p-4 mb-4 text-sm text-orange bg-orange-100 rounded-lg dark:bg-blue-200 dark:text-blue-800 ${className}`}
      role="alert"
    >
      {message}
    </div>
  );
}
