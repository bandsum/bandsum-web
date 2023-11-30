import React, { ReactNode } from 'react';
import styled from 'styled-components'

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <HeaderWrap>{children}</HeaderWrap>;
};

export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  height: 56px;
  position: relative;
`