import React, { useState, useEffect } from "react";
import axios from "axios";

import "./styles.css";
import Messages from "./Messages";

const Chat = (props) => {
    const [responses, setResponses] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");

    useEffect(() => {
        if (responses.length === 0) {
            const responseData = {
                text: "Hi there! I'm your AI assistant Luna 😉 How can I help you today?",
                isBot: true,
            };
            setResponses((responses) => [...responses, responseData]);
        }
    }, [responses, setResponses]);

    const handleMessageSubmit = (message) => {
        const data = {
            message,
        };

        axios
            .post("http://localhost:3001/chatbot", data)
            .then((response) => {
                const responseData = {
                    text:
                        response.data["message"]["fulfillmentText"] !== ""
                            ? response.data["message"]["fulfillmentText"]
                            : "Sorry, I can't get it. Can you please repeat once?",
                    isBot: true,
                };

                setResponses((responses) => [...responses, responseData]);
            })
            .catch((error) => {
                console.log("Error: Cannot connect to server", error);
            });
    };

    const handleMessageChange = (event) => {
        setCurrentMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        const message = {
            text: currentMessage,
            isBot: false,
        };
        if (event.key === "Enter") {
            setResponses((responses) => [...responses, message]);
            handleMessageSubmit(message.text);
            setCurrentMessage("");
        }
    };

    return (
        <div className="chatSection">
            <div className="botContainer">
                <div className="messagesContainer">
                    {/* <Message message={initResponse} /> */}
                    <Messages messages={responses} />
                </div>

                {/*The input section is 👇*/}
                <div className="inputSection">
                    <input
                        type="text"
                        value={currentMessage}
                        onChange={handleMessageChange}
                        onKeyDown={handleSubmit}
                        placeholder="Say something..."
                        className="messageInputField"
                    />
                </div>
            </div>
        </div>
    );
};

export default Chat;
