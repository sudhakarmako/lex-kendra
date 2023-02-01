import LexChat from "react-lex-plus";

function App() {
  return (
    <LexChat
      botName="BookTrip"
      IdentityPoolId="us-east-1:7ab79ccc-ea35-4fb3-a762-d18def96b951"
      placeholder="Write your message here"
      backgroundColor="#FFFFFF"
      height="430px"
      region="us-east-1"
      headerText="lex chat bot"
      headerStyle={{ backgroundColor: "#212121", fontSize: "16px" }}
      greeting={
        "Hello, how can I help? You can say things like 'help' to get more info"
      }
    />
  );
}

export default App;
