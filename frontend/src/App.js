import React, { useState } from "react";
import axios from "axios";

function App() {
  const [yearsExperience, setYearsExperience] = useState("");
  const [predictedSalary, setPredictedSalary] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/predict", {
        years_experience: parseFloat(yearsExperience),
      });
      setPredictedSalary(response.data.prediction);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Salary Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Years of Experience:</label>
          <input
            type="number"
            value={yearsExperience}
            onChange={(e) => setYearsExperience(e.target.value)}
          />
        </div>
        <button type="submit">Predict Salary</button>
      </form>
      {predictedSalary && <div>Predicted Salary: ${predictedSalary}</div>}
    </div>
  );
}

export default App;
