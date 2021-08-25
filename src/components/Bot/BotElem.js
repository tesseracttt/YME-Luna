import styled from "styled-components";

export const BotContainer = styled.section`
    margin: 0 50px;
    align-items: center;
`;

export const BotWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 60px;
`;

export const IntroTitle = styled.h3`
    text-align: center;
    font-weight: 700;
    font-size: 40px;
    color: #000;
`;

export const DescTitle = styled.h4`
    text-align: center;
    font-weight: 500;
    font-size: 25px;
    color: #787a91;
`;

export const BotLuna = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-top: 35px;
    margin-left: 145px;
    position: absolute;
    right: 10%;
    transform: translate(-10%);
`;
