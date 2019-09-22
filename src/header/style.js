import styled, { keyframes } from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;
  background-color: #fff;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  min-width: 680px;
  height: 70px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
`

export const LogoWrapper = styled.div`
  width: 240px;
  height: 70px;
  display: flex;
  align-items: center;
  .logo {
    display: block;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    img {
      display: block;
      width: 200px;
    }
  }
`

export const NavWrapper = styled.nav`
  height: 70px;
  flex: 1;
  display: flex;
  align-items: center;
`

const underlineEnterAni = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`


export const NavUl = styled.ul`
  height: 30px;
  min-width: 360px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .nav-li {
    display: block;
    font-size: 16px;
    padding: 6px;
    margin: 0 10px;
    position: relative;
    .underline {
      display: none;
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #6fd7af;
    }
    transition: color .2s ease-in-out;
    &:hover {
      color: #6fd7af;
      .underline {
        display: block;
        animation: .2s ${underlineEnterAni} ease-in-out;
      }
    }
  }
  .current-li {
    position: relative;
    color: #6fd7af;
    .underline {
      display: block;
    }
  }
`


export const LoginAndRegisterWrapper = styled.div`
  width: 160px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: block;
  }
  .LoginAndRefister {
    display: flex;
    align-items: center;
  }
`

export const Login = styled.div`
  padding: 6px 15px;
  margin-left: 10px;
  border: 2px solid #fff;
  border-radius: 30px;
  font-size: 16px;
  color: #000;
  white-space: nowrap;
  &:hover {
    color: #6fd7af;
    border-color: #6fd7af;
  }
  transition: all .1s ease-in-out;
`

export const Register = styled.div`
  padding: 6px 15px;
  border: 2px solid #6fd7af;
  margin-left: 10px;
  border-radius: 30px;
  background-color: #6fd7af;
  font-size: 16px;
  color: #fff;
  white-space: nowrap;
  &:hover {
    background-color: #fff;
    color: #6fd7af;
  }
  transition: all .1s ease-in-out;
`