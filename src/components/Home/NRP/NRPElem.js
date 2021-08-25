import styled from "styled-components";

const bgColor = "#FAFAFA";

export const StatsContainer = styled.div`
    background-color: ${bgColor};
    height: 100vh;
    max-width: 100%;
    margin-right: 0px;
    padding-left: 300px;
    display: grid;
    align-content: space-around;
`;

export const StatsWrapper = styled.div`
    /* max-width: 1000px; */
    margin: 0px 100px;
    /* height: 900px; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    justify-content: space-between;
    padding: 0px 20px;
`;

export const StatsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 300px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    width: 100%;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const StatsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const StatsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const StatsH2 = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 10px;
    text-align: center;
`;

export const StatsP = styled.p`
    font-size: 1rem;
    text-align: center;
`;
