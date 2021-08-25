import styled from "styled-components";

export const JobContainer = styled.section`
    margin: 0 50px;
`;

export const JobTitle = styled.h1`
    font-size: 36px;
    color: #000;
    margin-top: 100px;
    position: relative;
`;

export const JobWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px 0 0 0;
`;

export const JobColumn = styled.div`
    float: left;
    width: 50%;
`;

export const JobMedContainer = styled.div`
    margin-top: 20px;
    background: #ebf6ef;
    height: 500px;
    border-radius: 5px;
    position: relative;
`;

export const JobSubtitle1 = styled.h2`
    font-size: 40px;
    color: #000;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
`;

export const JobSubtitle2 = styled.p`
    font-size: 20px;
    color: "#787A91";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const JobSubtitle3 = styled.h4`
    font-size: 25px;
    text-align: center;
    color: #000;
    padding: 60px 0 10px 5px;
`;

export const JobImage = styled.img`
    width: 100%;
    height: 500px;
    opacity: 0.5;
`;
