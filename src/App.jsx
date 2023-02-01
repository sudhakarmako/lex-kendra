import AWS from "aws-sdk";

import { useRef, useState } from "react";
import dayjs from "dayjs";
import "./App.css";

AWS.config.region = "us-east-1";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-east-1:7ab79ccc-ea35-4fb3-a762-d18def96b951",
});

const lexruntime = new AWS.LexRuntime();
const lexUserId = "lex-chatbot-demo" + Date.now();

function App() {
  const date = new Date();
  const conversationWindow = useRef(null);
  const [messageEntered, setMessageEntered] = useState("");
  const [sessionAttributes, setSessionAttributes] = useState({});
  const [conversation, setConversation] = useState([
    {
      message: "Welcome to lex bot",
      by: "lex",
      date: date.toISOString(),
    },
  ]);

  const scrollToBottom = () => {
    conversationWindow.current.scrollTop =
      conversationWindow.current.scrollHeight + 300;
  };

  const pushConvesation = (convestation) => {
    setConversation((prevState) => [...prevState, convestation]);
  };

  const sendToLex = (inputText) => {
    var params = {
      botAlias: "bootripkendra",
      botName: "BookTrip",
      inputText,
      userId: lexUserId,
      sessionAttributes,
    };

    lexruntime.postText(params, function (err, data) {
      if (err) {
        console.log(err, err.stack);
        pushConvesation({
          message: "Error:  " + err.message + " (see console for details)",
          by: "lex",
          date: date.toISOString(),
        });
      }
      setSessionAttributes(data.sessionAttributes);
      pushConvesation({
        message: data?.message,
        by: "lex",
        date: date.toISOString(),
      });
      scrollToBottom();
    });
    return false;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!messageEntered) return null;
    pushConvesation({
      message: messageEntered.trim(),
      by: "user",
      date: date.toISOString(),
    });
    scrollToBottom();
    sendToLex(messageEntered.trim());
    setMessageEntered("");
  };
  const renderMessage = (message, type) => {
    if (type === "user") return message;
    if (type === "lex" && typeof message === "string") return message;
    return JSON.stringify(message);
  };

  return (
    <div className="container">
      <div className="chat-container">
        <div className="chat-header">
          <h3>Lex Kendra Chat Bot</h3>
        </div>
        <div className="chat-messages" ref={conversationWindow}>
          {!!conversation.length &&
            conversation.map(({ message, date, by }, idx) => (
              <div
                key={idx}
                className={`chat-bubble ${
                  by === "lex" ? "chat-left" : "chat-right"
                }`}
              >
                <p>{renderMessage(message, by)}</p>
                <sub>{dayjs(date).format("HH:mm a")}</sub>
              </div>
            ))}
        </div>
        <div className="chat-form">
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Write your message here.."
              value={messageEntered}
              onChange={(e) => setMessageEntered(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
