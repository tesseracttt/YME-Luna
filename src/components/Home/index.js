import React from "react";
import { HomeContainer, Stats, Wrapper, MainH1 } from "./HomeElem";
import Main from "./Main";
import NRPStats from "./NRP";
import VacStats from "./Vac";

const HomePage = () => {
    return (
        <>
            <HomeContainer>
                <Main />
                <MainH1>Follow SOP under NRP (National Recovery Plan)</MainH1>
                <Stats>
                    <NRPStats />
                </Stats>
                <Wrapper>
                    <VacStats />
                </Wrapper>
            </HomeContainer>
        </>
    );
};

export default HomePage;
