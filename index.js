const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(["Server is running."]);
});

app.listen(PORT, () => {
  console.log(`Server is started at port ${PORT}`);
});
