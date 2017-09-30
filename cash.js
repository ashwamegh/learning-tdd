const C = {};
C.getChange = function (totalPayable, cashPaid) {
  const coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  const loopLength = coins.length;
  const change = [];
  let remaining = cashPaid - totalPayable;

  for (let i = 0; i < loopLength; i++) {
    const coin = coins[i];
    if (remaining / coin >= 1) {
      const coinsCount = Math.floor(remaining / coin);
      for (let j = 0; j < coinsCount; j++) {
        change.push(coin);
        remaining -= coin;
      }
    }
  }

  return change;
};

module.exports = C;
