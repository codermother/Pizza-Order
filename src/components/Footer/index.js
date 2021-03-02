import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    Small
} from "./FooterElements"


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <Small >CoderMother @2021</Small>
                        <SocialIcons>
                        <SocialIconLink href='//www.facebook.com/oskee3/' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='//www.instagram.com/ozgeecsknnn/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink
                            href='//twitter.com/oskee3'
                            target='_blank'
                            aria-label='Twitter'
                            rel='noopener noreferrer'
                        >
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='//www.linkedin.com/in/%C3%B6zge-co%C5%9Fkun-g%C3%BCrsucu-28380987/' target='_blank' aria-label='Linkedin'>
                            <FaLinkedin />
                        </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
                
            </FooterWrap>
        </FooterContainer>        
    )
}

export default Footer
