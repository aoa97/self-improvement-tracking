import moment from "moment";

export const getDateMinusDate = (date) => {
  const a = moment(new Date().toISOString().slice(0, 10));
  const b = moment(date);
  const diff = b.diff(a, "days");

  if (diff > 1) {
    return `${diff} days`;
  } else if (diff === 1) {
    return `${diff} day`;
  } else {
    return `Today`;
  }
};
