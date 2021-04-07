import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDropDown,
  PermIdentity,
  WorkOutline,
  Menu,
} from "@material-ui/icons";
import { useState } from "react";
import { colors } from "../public/home.styles";
import { device } from "../styles/config.styles";

export default function NavBar({ isHome }) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Nav isHome={isHome}>
      <Wrapper>
        <LogoCtn>
          <WorkOutline
            style={{ color: `${colors.primaryColor}`, fontSize: 60 }}
          />
          {/* <Image src="/job.png" alt="me" width="60" height="50" /> */}
          <p
            style={{
              color: isHome ? "#fff" : "#000",
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            CVJOBS
          </p>
        </LogoCtn>
        <div>
          <StyledBurger open={openMenu} onClick={() => toggleMenu()}>
            <div />
            <div />
            <div />
          </StyledBurger>
          {/* <Menu  style={{color: isHome ? "#fff": "#000",fontSize:40}} onClick={()=> toggleMenu()}/> */}
        </div>
        <RightOptions>
          <LinksCtn>
            <Link href="/">
              <FlexRow>
                <A isHome={isHome}>Inicio</A>
                <RowWithColor />
                {/* {openFirstMenu && <MenuOption>
                    <p>Inicio</p>
                    <p>Lol</p>
                  </MenuOption>} */}
              </FlexRow>
            </Link>
            <Link href="/job">
              <FlexRow>
                <A isHome={isHome}>Estoy buscando empleo</A>
                <RowWithColor />
              </FlexRow>
            </Link>
            <Link href="/job">
              <FlexRow>
                <A isHome={isHome}>Busco personal</A>
                <RowWithColor />
              </FlexRow>
            </Link>
            <Link href="/job">
              <FlexRow>
                <A isHome={isHome}>Blog</A>
                <RowWithColor />
              </FlexRow>
            </Link>
            <Link href="/job">
              <FlexRow>
                <A isHome={isHome}>Pricing</A>
                <RowWithColor />
              </FlexRow>
            </Link>
            <Link href="/job">
              <FlexRow>
                <A isHome={isHome}>Contacto</A>
                <RowWithColor />
              </FlexRow>
            </Link>
          </LinksCtn>
          <LoginCtn>
            <ButtonLogin>
              <PermIdentity style={{ color: "#ffff" }} />
              <Link href="/job">
                <LoginButton>LOGIN</LoginButton>
              </Link>
            </ButtonLogin>
            <ButttonSigup>
              <Link href="/job">
                <A isHome={isHome}>CREAR CUENTA</A>
              </Link>
            </ButttonSigup>
          </LoginCtn>
        </RightOptions>
      </Wrapper>
      <DrawerNavigation open={openMenu}>
        <LogoCtn>
          <WorkOutline
            style={{ color: `${colors.primaryColor}`, fontSize: 60 }}
          />
          {/* <Image src="/job.png" alt="me" width="60" height="50" /> */}
          <p
            style={{
              color: "#000",
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            CVJOBS
          </p>
        </LogoCtn>
        <StyledBurger open={openMenu} onClick={() => toggleMenu()}>
          <div />
          <div />
          <div />
        </StyledBurger>
        {[
          1,
          2,
          3,
          4,
          5,
          1,
          ,
          1,
          1,
          1,
          1,
          1,
          1,
          ,
          1,
          1,
          1,
          1,
          1,
          ,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
        ].map((item, index) => (
          <p key={index} style={{ color: "#000", marginTop: 20 }}>
            INICIO
          </p>
        ))}
      </DrawerNavigation>
    </Nav>
  );
}

const ButtonLogin = styled.div`
  height: 50px;
  background-color: ${colors.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 5px;
  padding-left: 5px;
  border-radius: 5px;
`;

const ButttonSigup = styled.div``;

const MenuOption = styled.div`
  border: 1px solid white;
  position: absolute;
  top: 0;
  margin-top: 40px;
  width: 120px;
  height: 120px;
`;

const RowWithColor = styled(ArrowDropDown)`
  color: ${colors.primaryColor};
`;
const DrawerNavigation = styled.div`
  width: 320px;
  padding: 20px;
  padding-top: 100px;
  height: 100vh;
  background-color: #ffff;
  position: fixed;
  z-index: 10;
  border: 1px solid red;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  text-align: left;
  padding: 2rem;
  overflow: scroll;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media ${device.md}{
    display:none;
  }
  p {
    color: red;
  }
`;
const RightOptions = styled.div`
  display: none;
  @media ${device.md} {
    display: flex;
  }
`;
const LoginCtn = styled.div`
  margin-left: 30px;
  border-left: 2px solid gray;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  transition: "border 1s";
  position: relative;
  border-bottom: 2px solid transparent;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #23c0e9;
  }
`;

const Wrapper = styled.div`
  display: flex;
  /* border: 1px solid green; */
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  margin: auto;
  justify-content: space-between;
  width: 1500px;

  @media (max-width: 1200px) {
    max-width: 1100px;
  }
  @media (max-width: 1024px) {
    max-width: 924px;
  }
  @media (max-width: 768px) {
    max-width: 668px;
  }
  @media (max-width: 480px) {
    /* background-color: green; */
  }
`;

const Nav = styled.nav`
  height: 118px;
  width: 100%;
  margin: auto;
  display: flex;
  background-color: ${(props) => (props.isHome ? "transparent" : "#fff")};
  /* border: 1px solid #b2dfdb; */
  align-items: center;
  border-bottom: 1px solid #757575;
  /* border: 1px solid blue; */
`;
const A = styled.a`
  margin-left: 14px;
  font-size: 16px;
  border-spacing: 15px;
  padding-bottom: 5px;
  color: ${(props) => (props.isHome ? "#ffff" : "#000")};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-bottom: 2px solid transparent;
`;
const LoginButton = styled.a`
  margin-left: 14px;
  font-size: 16px;
  color: #ffff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-bottom: 2px solid transparent;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #ffff;
  }
`;
const LogoCtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinksCtn = styled.div`
  display: flex;
  height: 110px;
  align-items: center;
  justify-content: center;
  /* border:1px solid white; */
  @media (max-width: 480px) {
    display: none;
  }
`;

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  @media ${device.md} {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    /* background: ${({ open }) => (open ? "#EFFFFA" : "#EFFFFA")}; */
    background-color: #000;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
