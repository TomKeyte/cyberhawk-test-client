const groupData = (codes = [], data = {}) => {
  return data.reduce((dataObj, turbine, index) => {
    const message = turbine.status;
    if (message) {
      codes.forEach((code) => {
        if (message.indexOf(code) !== -1) {
          const turbineNo = index + 1;
          dataObj[code] = dataObj[code]
            ? [...dataObj[code], turbineNo]
            : [turbineNo];
        }
      });
    }
    return dataObj;
  }, {});
};

const chartData = (groupedData) => {
  return Object.keys(groupedData).map((key) => {
    return { x: key, y: groupedData[key].length };
  });
};

module.exports = {
  groupData,
  chartData,
};
