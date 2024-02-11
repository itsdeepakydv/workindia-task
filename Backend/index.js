const express = require("express");
const dotenv = require("dotenv");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
