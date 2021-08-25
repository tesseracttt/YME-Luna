import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
var mainWhite = "#faf9f9";
var highlightGreenBar = "#68b0ab";

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    position: sticky;
`;

export const NavLogoWrap = styled.div`
    max-width: 200px;
    margin-right: 30px;
    justify-content: flex-end;
`;

export const NavLogo = styled(LinkR)`
    color: ${mainWhite};
    font-family: "Titillium Web", sans-serif;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.6rem;
    display: flex;
    align-items: center;
    margin-left: 50px;
    font-weight: 300;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${highlightGreenBar};
        text-decoration: none;
    }
`;

export const NavImgWrap = styled.div`
    max-width: 30px;
    max-height: 30px;
    /* padding-left: 100px; */
`;

export const NavImg = styled.img`
    /* width: 100%; */
    /* margin: 10 0 10px 0;
    padding-right: 0;
    display: inline; */
    position: absolute;
    width: 40px;
    height: 70px;
    top: 1px;
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 760px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    /* Underline the current component in navbar */
    &.active {
        border-bottom: 3px solid ${highlightGreenBar};
    }
`;

export const NavIcon = styled(LinkR)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    transition: 350ms;
    z-index: 10;
`;

export const SidebarWrap = styled.div`
    width: 100%;
`;
