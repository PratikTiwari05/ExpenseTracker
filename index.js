const express=require('express');

const app=express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
    res.send("Expense Sharing route");
});
app.use("/api/users", require("./routes/user"));
app.use("/api/groups", require("./routes/group"));
app.use("/api/expenses", require("./routes/expense"));
app.use("/api/balances", require("./routes/balance"));
app.use("/api/settle", require("./routes/settlement"));


const PORT = process.env.PORT || 3000;;
app.listen(port, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});