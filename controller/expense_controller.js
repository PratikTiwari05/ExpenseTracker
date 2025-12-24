const db = require("../config/db");
const {
  equalSplit,
  exactSplit,
  percentSplit
} = require("../utils/splits");

exports.addExpense = async (req, res) => {
  const { groupId, paidBy, amount, splitType, splits } = req.body;

  if (!groupId || !paidBy || !amount || !splitType) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const [expenseResult] = await db.query(
      "INSERT INTO expenses (group_id, paid_by, amount, split_type) VALUES (?, ?, ?, ?)",
      [groupId, paidBy, amount, splitType]
    );

    const expenseId = expenseResult.insertId;
    let finalSplits = [];


    if (splitType === "EQUAL") {
      const [rows] = await db.query(
        "SELECT user_id FROM group_members WHERE group_id = ?",
        [groupId]
      );
      const users = rows.map(r => r.user_id);
      finalSplits = equalSplit(amount, users);
    } 
    else if (splitType === "EXACT") {
      finalSplits = exactSplit(splits);
    } 
    else if (splitType === "PERCENT") {
      finalSplits = percentSplit(amount, splits);
    }

    
    for (let split of finalSplits) {
      await db.query(
        "INSERT INTO expense_splits (expense_id, user_id, amount) VALUES (?, ?, ?)",
        [expenseId, split.userId, split.amount]
      );
    }

    res.status(201).json({
      message: "Expense added successfully",
      expenseId
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
