export default (date, diff) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + diff);
};
