document.getElementById("uppercase").addEventListener("click", () => formatText("uppercase"));
document.getElementById("lowercase").addEventListener("click", () => formatText("lowercase"));
document.getElementById("capitalize").addEventListener("click", () => formatText("capitalize"));
document.getElementById("clean").addEventListener("click", () => formatText("clean"));

async function formatText(action) {
    const inputText = document.getElementById("inputText").value;
  
    try {
      const response = await fetch("http://127.0.0.1:5000/format", { // Use 127.0.0.1
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText, action }), // Send text and action as JSON
      });
  
      console.log("Raw response:", response);
  
      if (!response.ok) {
        const errorData = await response.text();
        console.error("Error response:", errorData);
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData}`);
      }
  
      const data = await response.json(); // Parse the JSON response
      document.getElementById("result").textContent = data.formatted_text;
    } catch (error) {
      console.error("Fetch error:", error);
      document.getElementById("result").textContent = `Error: ${error.message}`;
    }
  }
  