// Importing required modules
import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';    

// Load OpenAI API key from .env file
dotenv.config();

// Create an instance of Express
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use("/", express.static("public"));

// Middleware to parse JSON requests
//app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize OpenAI API client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Endpoint to handle chat messages
app.post("/api/translate",  async (req, res) => {

    const { "text-to-translate": textToTranslate, "language-selector": targetLanguage } = req.body;
    console.log("Body:", req.body);
    console.log("Received text to translate:", textToTranslate);
    console.log("Received target language:", targetLanguage);
    const contextPromptRole = "You are a professional translator.";
    const contextPromptGoal = "You can only respond with a direct translation of the text the user sends you. "
                              + "Any other response or conversation is forbidden.";
                        
    const userPrompt = `Translate the following text to ${targetLanguage}: ${textToTranslate}`;

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: contextPromptRole},
                { role: "system", content: contextPromptGoal},
                { role: "user", content: userPrompt}
            ],
            max_tokens: 500,
            response_format: { type: "text"}
        });
        
        //const translatedText = completion.choices[0].message.content;
        const translatedText = completion.choices[0].message.content;

        console.log("Translated text:", translatedText);    
        
        res.status(200).json({translatedText});
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: "An error occurred while processing your request." });
    }
});


// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
