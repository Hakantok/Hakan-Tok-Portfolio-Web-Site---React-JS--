import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo,
    WebsiteRights, SocialIcons,SocialIconLink  } from './FooterElements';

const Footer = () => {

  const toggleAnasayfa = () => {
    scroll.scrollToTop();
  };
  
  return (
    <FooterContainer>
      <FooterWrap>         
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleAnasayfa}>
              HKN
            </SocialLogo>
            <WebsiteRights> Copyright © 2022 Hakan Tok | Tüm Hakları Saklıdır.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink 
              href='/' 
              target='_blank' 
              aria-label='Facebook'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink 
              href='/' 
              target='_blank' 
              aria-label='Twitter'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink 
              href='//www.instagram.com/hakantk6' 
              target='_blank' 
              aria-label='İnstagram'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink 
              href='//www.linkedin.com/in/hakanntok' 
              target='_blank' 
              aria-label='Linkedin'
              >
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
