const db = require("../config/db");

exports.settleDue = async (req, res) => {
  const { from, to, amount } = req.body;

  if (!from || !to || !amount) {
    return res.status(400).json({ message: "Invalid settlement data" });
  }

  try {
    await db.query(
      "INSERT INTO settlements (from_user, to_user, amount) VALUES (?, ?, ?)",
      [from, to, amount]
    );

    res.status(201).json({
      message: "Settlement recorded successfully"
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
