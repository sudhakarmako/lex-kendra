import { useRef, useState } from "react";
import dayjs from "dayjs";
import "./App.css";

function App() {
  const date = new Date();
  const conversationWindow = useRef(null);
  const [messageEntered, setMessageEntered] = useState("");
  const [conversation, setConversation] = useState([
    {
      message: "Welcome to lex bot",
      by: "lex",
      date: date.toISOString(),
    },
    {
      message: "Please type your message..",
      by: "lex",
      date: date.toISOString(),
    },
  ]);

  const scrollToBottom = () => {
    conversationWindow.current.scrollTop =
      conversationWindow.current.scrollHeight;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!messageEntered) return null;

    const message = {
      message: messageEntered.trim(),
      by: "user",
      date: date.toISOString(),
    };
    setConversation((prevState) => [...prevState, message]);
    setMessageEntered("");
    scrollToBottom();
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
                <p>{message}</p>
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
