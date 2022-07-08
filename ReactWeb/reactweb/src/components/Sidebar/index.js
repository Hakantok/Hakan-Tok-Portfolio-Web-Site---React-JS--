import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu } from './SidebarElement';

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to='anasayfa' onClick={toggle}>Ana Sayfa</SidebarLink>
            <SidebarLink to='hakkımda' onClick={toggle}>Hakkımda</SidebarLink>
            <SidebarLink to='yeteneklerim' onClick={toggle}>Yeteneklerim</SidebarLink>
            <SidebarLink to='iletisim' onClick={toggle}>İletişim</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
