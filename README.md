# OpenAI Translator Chat

OpenAI Translator Chat is a basic web application that allows users to translate text into different languages using a simple and user-friendly interface.

The purpose of the project is for training in the use of the ChatGPT API applied to a use case.

## Features

- Real-time text translation.
- Language selection for the target translation.
- Responsive and easy-to-use interface.

## Project Structure

```
openai-translator-chat/
├── public/
│   ├── index.html         # Main HTML file
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css # Application styles
│   │   ├── img/           # Images and favicon
│   │   └── js/
│   │       └── main.js    # Main application logic
├── .gitignore             # Git ignored files
├── package.json           # Node.js dependencies and scripts
└── README.md              # Project documentation
```

## Installation

1. Clone this repository:
   ```bash
   git clone git@github.com:xavierventeo/openai-translator-chat.git
2. Navigate to the project directory:
   ```bash
   cd openai-translator-chat
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Dependencies

This project uses the following main libraries:

- **axios**: For making HTTP requests easily.
- **dotenv**: For loading environment variables from a `.env` file.
- **express**: A framework for creating the web server.
- **openai**: The official client for interacting with the OpenAI API.

Additionally, for development purposes, the project uses:

- **nodemon**: To automatically restart the server when code changes are detected.


## Running the Project locally

To start the project, run the following command:
```bash
npm run start
```

This will start a local development server. Open your browser and navigate to `http://localhost:3000` (or the port specified in your setup) to view the application.

## Customization

- **Add Languages**: Edit the `index.html` file and add more options to the `<select id="language-selector">` element.
- **Styling**: Modify the `styles.css` file to customize the design.

## Dependencies

This project uses the following dependencies:
- **Node.js**: JavaScript runtime for running the application.
- **Express.js** (optional): If you plan to serve the app dynamically.
- **Other dependencies**: Add any additional libraries or frameworks you use.

To install all dependencies, run:
```bash
npm install
```

## License
[MIT](https://choosealicense.com/licenses/mit/)