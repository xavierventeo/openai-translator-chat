let translateButton = document.querySelector("#translate-button");

translateButton.addEventListener("click", async (event) => {  
    // Get the text to translate and the target language from the form
    let textToTranslate = document.querySelector("#text-to-translate").value.trim();
    let targetLanguage = document.querySelector("#language-selector").value;
  
    // Validate the input
    if (!textToTranslate) return false;

    const userMessage = document.createElement("div");
    userMessage.textContent = textToTranslate;
    const messagesContainer = document.querySelector("#translation-display");
    messagesContainer.appendChild(userMessage);
    // Scroll to the bottom of the messages container
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    // Send the text to OpenAI for translation
    try {
        const response = await fetch("/api/translate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Cambiado a JSON
            },
            body: JSON.stringify({
                "text-to-translate": textToTranslate,
                "language-selector": targetLanguage
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Received response:", data);

        // Create a new div element for the translated message
        const translatedMessage = document.createElement("div");
        translatedMessage.textContent = data.translatedText;
        messagesContainer.appendChild(translatedMessage);
        // Scroll to the bottom of the messages container
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    } catch (error) {   
        console.error("Error:", error);
    }

    // Clear the input field
    textToTranslate = "";
});