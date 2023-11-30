import styled from 'styled-components';
import splashLogo from '../assets/logo/splash-bandsum.svg';

const Splash = () => {
  return (
    <SplashWrap>
      <h1 className="a11y-hidden">bandsum 시작 페이지</h1>
      <img src={splashLogo} alt="bandsum 애플리케이션 시작 페이지의 로고 이미지"></img>
    </SplashWrap>
  );
};

export default Splash;

const SplashWrap = styled.div`
  width: 100vw;
  height: 100vh;

  & img {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
  }
`;
