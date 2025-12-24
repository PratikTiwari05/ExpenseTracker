exports.simplifyBalances = (rows) => {
  const net = {};

  // calculate net balance per user
  rows.forEach(({ borrower, lender, amount }) => {
    net[borrower] = (net[borrower] || 0) - amount;
    net[lender] = (net[lender] || 0) + amount;
  });

  const debtors = [];
  const creditors = [];

  Object.entries(net).forEach(([userId, balance]) => {
    if (balance < 0) debtors.push({ userId, amount: -balance });
    if (balance > 0) creditors.push({ userId, amount: balance });
  });

  const simplified = [];
  let i = 0, j = 0;

  while (i < debtors.length && j < creditors.length) {
    const pay = Math.min(debtors[i].amount, creditors[j].amount);

    simplified.push({
      from: debtors[i].userId,
      to: creditors[j].userId,
      amount: pay
    });

    debtors[i].amount -= pay;
    creditors[j].amount -= pay;

    if (debtors[i].amount === 0) i++;
    if (creditors[j].amount === 0) j++;
  }

  return simplified;
};
