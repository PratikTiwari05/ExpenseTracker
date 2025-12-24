exports.equalSplit = (totalAmount, users) => {
  const share = totalAmount / users.length;
  return users.map(userId => ({
    userId,
    amount: share
  }));
};

exports.exactSplit = (splits) => {
  return splits;
};

exports.percentSplit = (totalAmount, splits) => {
  return splits.map(s => ({
    userId: s.userId,
    amount: (totalAmount * s.percent) / 100
  }));
};
