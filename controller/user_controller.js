const db = require("../config/db");

exports.createUser = async (req, res) => {
    console.log("Create User API hit", req.body);
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required" });
    }

    try {
        await db.query("INSERT INTO users (name,email) VALUES(?,?)", [name, email]);
        return res.status(201).json({ message: "User Created Successfully" });
    }
    catch (err) {
        console.error("DB ERROR:", err);
        res.status(500).json({ message: 'Internal Server Error' });
    }

};