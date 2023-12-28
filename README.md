# MIKO BOT

MIKO BOT is a Node.js-based WhatsApp chatbot powered by [Puppeteer](https://pptr.dev/) and [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js). It allows you to automate interactions with WhatsApp Web, enabling various automated tasks and responses.

## Features

- **WhatsApp Automation**: MIKO BOT can automate tasks such as sending messages, images, and stickers to WhatsApp contacts or groups.
- **Dynamic Responses**: Customize your bot to provide dynamic responses based on user inputs or predefined conditions.
- **Message Handling**: Handle incoming messages, process them, and respond accordingly.
- **Sticker Handling**: Respond with random stickers from a predefined collection.
- **Example Bot**: [Miko Bot](https://wa.link/lof6tp)

## Getting Started

Follow these steps to set up and run the MIKO BOT on your local machine or deploy it to a cloud platform like Heroku.

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/awesome-tofu/miko-bot.git

2. **Install  Dependencies:**

    ```bash
    npm install

3. **Set Environment Variables:**

    ```env
   PUPPETEER_SKIP_CHROMIUM_DOWNLOAD (required) if you are running on windows, remove it
   PUPPETEER_EXECUTABLE_PATH (required) if you are running on windows, remove it
   MONGODB_URI (optional)
   DEFAULT_LANGUAGE (optional)
   BOT_NUMBER (required)
   OWNER_NUMBER (required)
   NUMVERIFY_KEY (optional)
   GITHUB_TOKEN (https://github.com/settings/tokens)
   SESSION_REPO (just make a new public repo and paste the link)
    

4. **Start the script:**
   ```bash
   npm start

5. **Scanning the QR code:**

   Open the link provided by the deployment platform OR if you are running on local platform open http://localhost:3000/ or http://localhost:PORT/

5. **Command Usage:**
   
   Once the bot is running, you can start sending commands and messages to it via WhatsApp.

   | Command          | Description                                  |
   | ----------------- | -------------------------------------------- |
   | `.start`         | Command to start the bot.                    |
   | `.send <message>`| Send a text message to a contact or group.   |
   | `.imageine`         | Generate a random image from a predefined list.  |
   | `.sticker`       | Send a sticker from replied image.     |
   | `.translate <text>` | Translate text to the default language.    |
   | `.report <issue>`| Report an issue with the bot.              |
   | `.support`       | Get support and assistance.                |
   | `.help`       | You can see more command lists               |
   
## Support

   <p>Need any help? Feel free to join our support group. We will be happy to help you☺️</p><br>
   
 <a aria-label="Join our chats" href="https://chat.whatsapp.com/E0XzCPRXoip16GVoG9yUV0" target="_blank">
 <img alt="whatsapp" src="https://img.shields.io/badge/Join Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
  </a>

## Things I want you to know

   I am still learning nodejs, so my code might look repeating cuz I dont want to touch code if its working, and I am having trouble in saving session (session.js doesnt works). If you can help, please feel free to contribute.
   
## License

[MIT](https://choosealicense.com/licenses/mit/)

