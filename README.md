# Text Formatter Chrome Extension with Python Backend

## Overview
This project is a simple Chrome extension that formats user-input text using a Python Flask backend. The backend processes text to:
- Convert to **UPPERCASE** or **lowercase**.
- **Capitalize** each word.
- **Clean** special characters or trim extra spaces.

---

## Features
- **UPPERCASE Conversion**: Converts all text to uppercase.
- **lowercase Conversion**: Converts all text to lowercase.
- **Capitalize Words**: Capitalizes the first letter of each word.
- **Clean Text**: Removes special characters and trims spaces.

---

## Prerequisites
1. **Python 3.x**: Installed on your machine.
2. **Google Chrome**: For running the extension.
3. Required Python Libraries:
   - Flask
   - Flask-CORS

---

## Setup and Usage

### Step 1: Clone the Repository
1. Open your terminal.
2. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository_url>
   cd text-formatter-extension
Step 2: Backend Setup
Navigate to the backend directory:


cd backend
Install the required dependencies:


pip install -r requirements.txt
Start the Flask server:


python3 app.py
Verify the server is running at http://127.0.0.1:5000.

Test it by sending a POST request using tools like Postman or curl:


curl -X POST http://127.0.0.1:5000/format \
-H "Content-Type: application/json" \
-d '{"text": "hello, world!", "action": "capitalize"}'
Expected Response:


{
  "formatted_text": "Hello, World!"
}
Step 3: Chrome Extension Setup
Open Google Chrome and navigate to chrome://extensions/.
Enable Developer Mode (toggle in the top-right corner).
Click Load unpacked and select the extension folder from this repository.
The extension will now appear in your Chrome toolbar.
Step 4: Using the Extension
Click the extension icon in Chrome’s toolbar.
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


{
  "text": "hello, world!",
  "action": "capitalize"
}
Response Body:

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

{
  "formatted_text": "Hello, World!"
}
