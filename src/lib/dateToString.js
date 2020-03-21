export default date => {
  const [year, month, day] = [
    date.getFullYear(),
    `${date.getMonth()}`.padStart(2, 0),
    `${date.getDate()}`.padStart(2, 0)
  ];
  return `${year}-${month}-${day}`;
};
