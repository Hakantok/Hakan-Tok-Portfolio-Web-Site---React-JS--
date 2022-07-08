import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav,setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    }else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleAnasayfa = () => {
    scroll.scrollToTop();
  };

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to='/' onClick={toggleAnasayfa}>HKN</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks 
                to='anasayfa'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >
                  Ana Sayfa
                  </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >
                  Hakkımda
                  </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                to='yeteneklerim'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >
                  Yeteneklerim
                  </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                to='contact'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >
                  İletişim
                  </NavLinks>
              </NavItem>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    </>
  );
};

export default Navbar
