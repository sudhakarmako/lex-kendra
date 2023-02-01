import LexChat from "react-lex-plus";
import "./App.css";
// function App() {
//   return (
//     <LexChat
//       botName="BookTrip"
//       IdentityPoolId="us-east-1:7ab79ccc-ea35-4fb3-a762-d18def96b951"
//       placeholder="Write your message here"
//       backgroundColor="#FFFFFF"
//       height="430px"
//       region="us-east-1"
//       headerText="lex chat bot"
//       headerStyle={{ backgroundColor: "#212121", fontSize: "16px" }}
//       greeting={
//         "Hello, how can I help? You can say things like 'help' to get more info"
//       }
//     />
//   );
// }

function App() {
  return (
    <div className="container">
      <div className="chat-container">
        <div className="chat-header">
          <h3>Lex Kendra Chat Bot</h3>
        </div>
        <div className="chat-messages">
          <div className="chat-bubble chat-left">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-right">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-left">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-right">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-left">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-right">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-left">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-right">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-left">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-right">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-left">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-right">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-left">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-right">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-left">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-right">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-left">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-right">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-left">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-right">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-left">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="chat-bubble chat-right">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="chat-form">
          <form>
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Write your message here.."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
