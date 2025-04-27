// Importing required modules
import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';

// Load OpenAI API key from environment variables
dotenv.config();

// Load express and OpenAI
const app = express();
const PORT = process.env.PORT || 3000;

// Path for public folder
app.use("/", express.static("public"));

// Middleware to parse JSON requests
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
  