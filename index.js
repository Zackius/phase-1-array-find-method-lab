// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

let superbowlWin = (record) => {
  for (let result of record) {
    if (result.year) {
      let outcome = record.find((item) => item.result === 'W');
      return outcome.year
    } else {
      return undefined;
    }
  }
};
