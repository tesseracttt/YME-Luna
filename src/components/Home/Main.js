import React from "react";
import {
    MainContainer,
    MainBg,
    VideoBg,
    MainContent,
    MainH1,
    MainH2,
} from "./MainElem";

const Main = () => {
    return (
        <>
            <MainContainer id="home">
                <MainBg>
                    <VideoBg
                        autoPlay
                        loop
                        muted
                        src="https://static.videezy.com/system/resources/previews/000/038/506/original/alb_earth1005_1080p_24fps.mp4"
                        type="video/mp4"
                        controlsList="nodownload"
                    />
                </MainBg>
                <MainContent>
                    <MainH1>Fight againt COVID-19 Together</MainH1>
                    <MainH2>
                        We guard you just like the moon guards the earth
                    </MainH2>
                </MainContent>
            </MainContainer>
        </>
    );
};

export default Main;
