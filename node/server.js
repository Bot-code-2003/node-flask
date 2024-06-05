import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 1000;
const FLASK_API_URL = "http://localhost:5000"; // Replace with the URL of your Flask backend

app.use(cors()); // Enable CORS for all routes

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Niggesh hello from Server");
});

app.post("/predict", async (req, res) => {
  try {
    const response = await axios.post(`${FLASK_API_URL}/predict`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
