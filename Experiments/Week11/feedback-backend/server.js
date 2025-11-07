const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Replace <password> with your real password
mongoose.connect(process.env.MONGO_URI)

  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

app.use("/api/feedback", feedbackRoutes);

app.listen(5000, () => {
  console.log("✅ Server running on port 5000");
});
