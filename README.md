# Text Formatter Chrome Extension with Python Backend

## Overview
This project is a simple Chrome extension that formats user-input text by:
- Converting to **UPPERCASE** or **lowercase**.
- **Capitalizing** each word.
- **Cleaning** special characters or extra spaces.

The Chrome extension communicates with a Python Flask backend that handles the text formatting logic. This project serves as a learning example of integrating frontend and backend development.

---

## Features
- **UPPERCASE Conversion**: Converts text to uppercase.
- **lowercase Conversion**: Converts text to lowercase.
- **Capitalize Words**: Capitalizes the first letter of each word.
- **Clean Text**: Removes special characters and trims spaces.

---

## File Structure

text-formatter-extension/ ├── extension/ │ ├── manifest.json # Chrome extension metadata │ ├── popup.html # HTML for the extension popup │ ├── popup.js # JavaScript logic for the popup │ ├── styles.css # Styling for the popup UI ├── backend/ │ ├── app.py # Python Flask backend │ ├── requirements.txt # Python dependencies └── README.md # Project documentation

yaml
Copy code

---

## Prerequisites

1. **Python 3.x**: Installed and configured on your machine.
2. **Google Chrome**: Installed to run the extension.
3. **Flask and Flask-CORS**: Required Python libraries for the backend.
4. **Basic Understanding of Chrome Extensions**: Familiarity with `manifest.json`, HTML, and JavaScript.

---

## Setup and Usage

### Step 1: Clone the Repository
1. Open your terminal.
2. Clone this repository using:
   ```bash
   git clone <repository_url>
   cd text-formatter-extension
Step 2: Backend Setup
Navigate to the backend directory:

bash
Copy code
cd backend
Install Python dependencies:

bash
Copy code
pip install -r requirements.txt
Start the Flask server:

bash
Copy code
python3 app.py
Verify the server is running:

The Flask server should start on http://127.0.0.1:5000.

You can test it by sending a POST request to http://127.0.0.1:5000/format using tools like Postman or curl:

bash
Copy code
curl -X POST http://127.0.0.1:5000/format -H "Content-Type: application/json" -d '{"text": "hello, world!", "action": "capitalize"}'
Expected response:

json
Copy code
{
  "formatted_text": "Hello, World!"
}
Step 3: Chrome Extension Setup
Open Google Chrome.
Go to chrome://extensions/.
Enable Developer Mode (toggle in the top-right corner).
Click Load unpacked.
Select the extension folder from this repository.
The extension should now be loaded and visible in the toolbar.
Step 4: Using the Extension
Click on the extension icon in Chrome’s toolbar.
Enter text into the input field.
Click one of the formatting buttons:
UPPERCASE
lowercase
Capitalize Words
Clean Text
The formatted text will appear below.
API Details (Backend)
POST /format
Description: Formats the provided text based on the specified action.
Request Body:
json
Copy code
{
  "text": "hello, world!",
  "action": "capitalize"
}
Response Body:
json
Copy code
{
  "formatted_text": "Hello, World!"
}
Supported Actions:
"uppercase": Converts text to uppercase.
"lowercase": Converts text to lowercase.
"capitalize": Capitalizes each word.
"clean": Removes special characters and trims spaces.
Example Usage
Input:
Text: hello, world!
Action: capitalize
Output:
json
Copy code
{
  "formatted_text": "Hello, World!"
}
Troubleshooting
Common Issues
1. Chrome Extension Not Communicating with Backend
Ensure the Flask server is running at http://127.0.0.1:5000.
Check the fetch URL in popup.js:
javascript
Copy code
const response = await fetch("http://127.0.0.1:5000/format", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ text: inputText, action }),
});
Ensure CORS is properly configured in Flask:
python
Copy code
from flask_cors import CORS
CORS(app, resources={r"/*": {"origins": "*"}})
2. Flask Server Not Running on 5000 Port
If the server starts on a different port, update the fetch URL in popup.js to match the new port:
javascript
Copy code
const response = await fetch("http://127.0.0.1:<new_port>/format", {
  ...
});
3. SyntaxError: Failed to execute 'json' on 'Response'
This happens if the backend doesn’t return a valid JSON response. Ensure that Flask always returns valid JSON.
Built With
Frontend: HTML, CSS, JavaScript (Chrome extension).
Backend: Python Flask.
Contributing
Feel free to fork this repository, make changes, and submit a pull request.

License
This project is licensed under the MIT License.




