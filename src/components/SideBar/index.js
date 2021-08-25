import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SideBarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { NavImgWrap, NavImg, NavLogo, NavLogoWrap } from "./NavBarElem";
import logo from "../../images/night.svg";

var mainColor = "#006a71";

const NavContainer = styled.div`
    background: ${({ scrollNav, bgColor }) =>
        bgColor ? "#006a71" : scrollNav ? "#006a71" : "transparent"};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

const Nav = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: ${mainColor};
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    transition: 350ms;
    z-index: 10;
    float: left;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const SideBar = () => {
    // Set nav bar to transparent when on top
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    const currentRoute = useLocation().pathname;
    // var bgColor = false;
    const [bgColor, setBgColor] = useState({
        isHome: window.location.pathname === "/",
    });

    // eslint-disable-next-line no-unused-vars
    const detectHome = () => {
        const homePath = window.location.pathname === "/";
        if (!homePath) {
            setBgColor((prevBgColor) => ({
                ...prevBgColor,
                isHome: false,
            }));
        }
        if (homePath) {
            setBgColor((prevBgColor) => ({
                ...prevBgColor,
                isHome: true,
            }));
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const toggleHome = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <NavContainer
                    className="NavContainer"
                    scrollNav={scrollNav}
                    bgColor={currentRoute === "/" ? !bgColor : bgColor}
                >
                    <NavIcon>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                    <Nav className="Nav">
                        <NavLogoWrap onClick={toggleHome}>
                            <NavImgWrap>
                                <NavImg src={logo} alt={logo} />
                            </NavImgWrap>
                            <NavLogo>LUNA</NavLogo>
                        </NavLogoWrap>
                    </Nav>
                    <SidebarNav sidebar={sidebar}>
                        <SidebarWrap>
                            <NavIcon>
                                <AiIcons.AiOutlineClose onClick={showSidebar} />
                            </NavIcon>
                            {SidebarData.map((item, index) => {
                                return <SubMenu item={item} key={index} />;
                            })}
                        </SidebarWrap>
                    </SidebarNav>
                </NavContainer>
            </IconContext.Provider>
        </>
    );
};

export default SideBar;
