import React from "react";
import Chat from "./Chat";
import { BotContainer, BotWrapper, BotLuna } from "./BotElem";

const ChatPage = () => {
    return (
        <>
            <BotContainer>
                <BotWrapper>
                    <BotLuna src="https://image.flaticon.com/icons/png/512/4039/4039743.png" />
                </BotWrapper>
                <Chat />
            </BotContainer>
        </>
    );
};

export default ChatPage;
