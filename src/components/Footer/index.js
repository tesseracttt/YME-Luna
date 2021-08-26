import React from "react";
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterElement";

import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const toggleHome = () => {
        // scroll.scrollToTop();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                            <FooterLink to="/">How it works</FooterLink>
                            <FooterLink to="/">Our Team</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            LUNA
                        </SocialLogo>
                        <WebsiteRights>
                            LUNA {new Date().getFullYear()} All rights reserved
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href="www.facebook.com"
                                target="_blank"
                                aria-label="Facebook"
                            ></SocialIconLink>
                            <FaFacebook />
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Instagram"
                            ></SocialIconLink>
                            <FaInstagram />
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Github"
                            ></SocialIconLink>
                            <FaGithub />
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="LinkedIn"
                            ></SocialIconLink>
                            <FaLinkedin />
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
