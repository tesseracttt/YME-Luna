import React from "react";
import Chat from "./Chat";
import { BotContainer, BotWrapper, BotLuna } from "./BotElem";
import img1 from "../../images/jobLogo3.jpeg";

const ChatPage = () => {
    return (
        <>
            <BotContainer>
                <BotWrapper>
                    {/* <TitleWrapper>
                        <IntroTitle>Let's us introduce you Luna!</IntroTitle>
                        <DescTitle>
                            A listener and an assistant for you
                        </DescTitle>
                    </TitleWrapper> */}
                    <BotLuna src="https://image.flaticon.com/icons/png/512/4039/4039743.png" />
                </BotWrapper>
                <Chat />
            </BotContainer>
        </>
    );
};

export default ChatPage;
