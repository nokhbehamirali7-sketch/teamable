const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/teamable")
  .then(() => console.log("MongoDB connected to teamable database"))
  .catch((err) => console.error("MongoDB connection error:", err));

const experienceSchema = new mongoose.Schema({
  teamName: String,
  member: String,
  experience: String,
});

const Experience = mongoose.model("Experience", experienceSchema);

app.post("/api/experience", async (req, res) => {
  try {
    const newExperience = new Experience(req.body);
    await newExperience.save();

    res.status(200).json({
      message: "Success! Experience received successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

app.get("/api/experiences", async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
}

module.exports = app;
