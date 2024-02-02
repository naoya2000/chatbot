// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Angus",
  initialMessages: [createChatBotMessage(`Hi, I'm here to help. What do you want to do?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "darkblue",
    },
    chatButton: {
      backgroundColor: "darkblue",
    },
  }
}

export default config