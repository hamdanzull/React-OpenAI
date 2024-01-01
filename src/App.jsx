import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Icons from './components/Header/Icons'
import Notification from './components/Header/Notification'
import Menu from './components/Header/Menu'
import Conversation from "./components/Conversation/Conversation";
import ConversationList from "./components/Conversation/ConversationList";
import FormWrapper from './components/Form/FormWrapper'
import FormInput from './components/Form/FormInput'
import FormSubmit from './components/Form/FormSubmit'
import ClearChat from "./components/Header/ClearChat";
import generateResponse from "./utils/openaiUtil";
import { initialMessages, restoredMessages } from "./utils/storageUtil";

export default function App() {
   const [input, setInput] = useState("");
   const [waitingResponse, setWaitingResponse] = useState(false);
   const [messages, setMessages] = useState(() => {
      return restoredMessages() || initialMessages();
   });
   const [theme, setTheme] = useState(() => {
      return localStorage.getItem('theme') || 'dark';
   });

   const handleSetTheme = () => {
      setTheme((prevTheme) => (
         prevTheme === 'light' ? 'dark' : 'light'
      ));
   };

   useEffect(() => {
      localStorage.setItem('messages', JSON.stringify(messages));
   }, [messages]);

   useEffect(() => {
      localStorage.setItem('theme', theme);
      document.documentElement.className = theme;
   }, [theme]);

   const addNewConversation = (sender, text) => {
      setMessages((prevMessages) => [
         ...prevMessages,
         { sender, text, timestamp: new Date() },
      ]);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!input || waitingResponse) return;

      setInput("");
      setWaitingResponse(true);
      addNewConversation("user", input);

      setTimeout(() => {
         addNewConversation("ai", "Typing...");
      }, 500);

      const responseText = await generateResponse(messages, input)
      // Replace state typing message
      setMessages((prevMessages) => [
         ...prevMessages.slice(0, -1),
         {
            sender: "ai",
            text: responseText,
            timestamp: new Date(),
         },
      ]);
      setWaitingResponse(false);
   };

   return (
      <div className="relative bg-slate-200 text-gray-100 h-screen flex flex-col dark:bg-gray-800 dark:text-gray-50">
         <Header>
            <Icons >
               <ClearChat setMessages={setMessages} />
               <Notification />
               <Menu theme={theme} handleSetTheme={handleSetTheme} />
            </Icons>
         </Header>

         <Conversation>
            <ConversationList messages={messages} />
         </Conversation>

         <FormWrapper handleSubmit={handleSubmit}>
            <FormInput input={input} setInput={setInput} />
            <FormSubmit waitingResponse={waitingResponse} />
         </FormWrapper>
      </div>
   );
}
