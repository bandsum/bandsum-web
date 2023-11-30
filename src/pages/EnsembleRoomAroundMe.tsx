import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';

import headerLogo from '../assets/logo/header-bandsum.svg';
import searchIcon from '../assets/icon/hearder-search.svg';

const EnsembleRoomAroundMe = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search');
  };
  return (
    <>
      <Header>
        <LogoSWrap>
          <img
            src={headerLogo}
            alt="내 주변 합주실 페이지 상단의 로고 이미지"
            className="header-logo"
          ></img>
        </LogoSWrap>
        <SearchButton type="button" onClick={handleSearchClick}>
          <img src={searchIcon} alt="내 주변 합주실 검색하기"></img>
        </SearchButton>
      </Header>
    </>
  );
};

export default EnsembleRoomAroundMe;

const LogoSWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
`;

const SearchButton = styled.button`
  width: 56px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;
