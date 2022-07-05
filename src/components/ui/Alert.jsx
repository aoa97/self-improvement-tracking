const Alert = ({ message }) => {
  return (
    <div
      class="p-4 mb-4 text-sm text-orange bg-orange-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
      role="alert"
    >
      {message}
    </div>
  );
};

export default Alert;
