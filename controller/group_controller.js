const db = require("../config/db");
exports.createGroup = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: "Group name is required" });
    }
    try {
        const [result] = await db.query(
            "INSERT INTO expense_groups (name) VALUES (?)",
            [name]
        );

        res.status(201).json({
            message: "Group created successfully",
            groupId: result.insertId
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.addUserToGroup=async(req,res)=>{
    const { groupId, userId } = req.body;
     if (!groupId || !userId) {
    return res.status(400).json({ message: "groupId and userId are required" });
  }

  try {
    await db.query(
      "INSERT INTO group_members (group_id, user_id) VALUES (?, ?)",
      [groupId, userId]
    );

    res.status(201).json({ message: "User added to group" });
  }
   catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
