import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { ArrowDropDown, PermIdentity, WorkOutline,Menu} from "@material-ui/icons";
import { useState } from "react";
import { colors } from "../public/home.styles";



export default function NavBar() {
  const [openFirstMenu, setOpenFirstMenu] = useState(false);

  return (
    <Nav>
      <Wrapper>
        <LogoCtn>
          <WorkOutline style={{color:`${colors.primaryColor}`,fontSize:60}}/>
          {/* <Image src="/job.png" alt="me" width="60" height="50" /> */}
          <p
            style={{
              color: "#ffff",
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            CVJOBS
          </p>
        </LogoCtn>
        <div>
        <Menu style={{color:'#fff',fontSize:40}}/>
        </div>
        <RightOptions>
          <LinksCtn>
            <Link href="/">
              <FlexRow
                onMouseEnter={() => setOpenFirstMenu(true)}
                onMouseLeave={() => setOpenFirstMenu(false)}
              >
                <A>Inicio</A>
                <RowWithColor />
                {/* {openFirstMenu && <MenuOption>
                    <p>Inicio</p>
                    <p>Lol</p>
                  </MenuOption>} */}
              </FlexRow>
            </Link>
            <Link href="/job">
              <FlexRow>
                <A>Estoy buscando empleo</A>
                <RowWithColor />
              </FlexRow>
            </Link>
            <Link href="/job">
              <FlexRow>
                <A>Busco personal</A>
                <RowWithColor />
              </FlexRow>
            </Link>
            <Link href="/job">
              <FlexRow>
                <A>Blog</A>
                <RowWithColor />
              </FlexRow>
            </Link>
            <Link href="/job">
              <FlexRow>
                <A>Pricing</A>
                <RowWithColor />
              </FlexRow>
            </Link>
            <Link href="/job">
              <FlexRow>
                <A>Contacto</A>
                <RowWithColor />
              </FlexRow>
            </Link>
          </LinksCtn>
          <LoginCtn>
            <ButtonLogin>
              <PermIdentity style={{color:"#ffff"}}/>
              <Link href="/job">
                <LoginButton>LOGIN</LoginButton>
              </Link>
            </ButtonLogin>
            <ButttonSigup>
              <Link href="/job">
                <A>CREAR CUENTA</A>
              </Link>
            </ButttonSigup>
          </LoginCtn>
        </RightOptions>         
      </Wrapper>     
    </Nav>
  );
}

const ButtonLogin = styled.div`
  height:50px;
  background-color:${colors.primaryColor};
  display:flex;  
  justify-content:center;
  align-items:center;
  padding-right:5px;
  padding-left:5px;
  border-radius:5px;  
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
  width: 275px;
  height: 100vh;
  background-color: #ffff;
  position: fixed;
  z-index: 10;
`;
const RightOptions = styled.div`
  display: flex;
  @media (max-width: 480px) {
    display:none;
  }
`;
const LoginCtn = styled.div`
  margin-left: 30px;
  border-left: 2px solid gray;
  padding-left:10px;
  display:flex;
  align-items:center;  
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
  /* border: 1px solid blue; */
  width: 100%;
  margin: auto;
  display: flex;
  /* background-color:#b2dfdb; */
  /* border: 1px solid #b2dfdb; */
  align-items: center;
  border-bottom: 1px solid #757575;
`;
const A = styled.a`
  margin-left: 14px;
  font-size: 16px;
  border-spacing: 15px;
  padding-bottom: 5px;
  color: #ffff;
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
  align-items: "center";
`;

const LinksCtn = styled.div`
  display: flex;
  height:110px;
  align-items:center;
  justify-content:center;
  /* border:1px solid white; */
  @media (max-width: 480px) {
    display:none;
  }
`;
