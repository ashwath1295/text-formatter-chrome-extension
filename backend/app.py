from flask import Flask, request, jsonify
from flask_cors import CORS
import re

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Enable CORS for all origins

def format_text(text, action):
    if action == "uppercase":
        return text.upper()
    elif action == "lowercase":
        return text.lower()
    elif action == "capitalize":
        return " ".join(word.capitalize() for word in text.split())
    elif action == "clean":
        return re.sub(r"[^\w\s]", "", text).strip()
    return text

@app.route('/format', methods=['POST'])
def format_endpoint():
    try:
        data = request.get_json()  # Parse incoming JSON
        if not data:
            return jsonify({"error": "Invalid JSON input"}), 400
        
        text = data.get("text", "")
        action = data.get("action", "")
        
        if not action:
            return jsonify({"error": "Action parameter is required"}), 400
        
        formatted_text = format_text(text, action)
        return jsonify({"formatted_text": formatted_text})
    except Exception as e:
        print(f"Error: {e}")  # Debug log
        return jsonify({"error": "Internal Server Error"}), 500

if __name__ == "__main__":
    app.run(debug=True)
