from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
model = joblib.load('salary_prediction_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    years_experience = request.json['years_experience']
    prediction = model.predict([[years_experience]])[0]
    return jsonify({'prediction': prediction})

@app.route('/')
def root():
    return "Hello Niggesh"

if __name__ == '__main__':
    app.run(debug=True)
