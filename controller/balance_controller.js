const db = require("../config/db");
const { simplifyBalances } = require("../utils/balanaceSimplify");

exports.getBalancesForUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const [rows] = await db.query(`
  SELECT 
    es.user_id AS borrower,
    e.paid_by AS lender,
    SUM(es.amount) AS amount
  FROM expenses e
  JOIN expense_splits es ON e.id = es.expense_id
  WHERE es.user_id != e.paid_by
    AND (es.user_id = ? OR e.paid_by = ?)
  GROUP BY borrower, lender
`, [userId, userId]);

    const simplified = simplifyBalances(rows);

    res.json({
      userId,
      simplifiedBalances: simplified
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
