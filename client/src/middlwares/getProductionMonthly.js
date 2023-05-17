export default function getProductionMonthly(data) {
  const factoriesProduction = {};
  if (!data.length) return factoriesProduction;
  data.forEach((item) => {
    if (item.date === null || item.factory_id === null) return;
    const dateFormatted = item.date.split('/').reverse().join('/');
    const factoryId = item.factory_id;
    const monthNumber = new Date(dateFormatted).getMonth();
    if (!factoriesProduction[factoryId]) factoriesProduction[factoryId] = [];
    if (!factoriesProduction[factoryId][monthNumber]) factoriesProduction[factoryId][monthNumber] = {};
    for (let key in item) {
      if (key.includes('product')) {
        if (!factoriesProduction[factoryId][monthNumber][key]) factoriesProduction[factoryId][monthNumber][key] = 0;
        factoriesProduction[factoryId][monthNumber][key] += +item[key];
      }
    }
  });
  return factoriesProduction;
}
