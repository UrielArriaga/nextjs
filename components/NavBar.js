import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { ArrowDropDown } from "@material-ui/icons";
export default function NavBar() {
  return (
    <Nav>
      <Wrapper>
        <LogoCtn>
          <Image src="/logo.png" alt="me" width="167" height="50" />
        </LogoCtn>
        <RightOptions>
          <LinksCtn>
            <Link href="/">
              <FlexRow>
                <A>Inicio</A>
                <RowWithColor />
              </FlexRow>
            </Link>
            <Link href="/job">
              <FlexRow>
              <A>Estoy buscando empleo</A>
              <RowWithColor />
              </FlexRow>
            </Link>
            <Link href="/job">
              <A>Busco personal</A>
            </Link>
            <Link href="/job">
              <A>Blog</A>
            </Link>
            <Link href="/job">
              <A>Pricing</A>
            </Link>
            <Link href="/job">
              <A>Contacto</A>
            </Link>
          </LinksCtn>
          <LoginCtn>
            <Link href="/job">
              <LoginButton>Pricing</LoginButton>
            </Link>
            <Link href="/job">
              <A>Pricing</A>
            </Link>
          </LoginCtn>
        </RightOptions>
      </Wrapper>
      {/* <DrawerNavigation/> */}
    </Nav>
  );
}

const RowWithColor = styled(ArrowDropDown)`
  color: #23c0e9;
`;
const DrawerNavigation = styled.div`
  width: 275px;
  height: 100vh;
  background-color: #ffff;
  position: absolute;
  z-index: 10;
`;

const RightOptions = styled.div`
  display: flex;
`;
const LoginCtn = styled.div`
  margin-left: 30px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
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
  border: 1px solid #b2dfdb;
  align-items: center;
  /* border-bottom: 1px solid #546e7a; */
`;
const A = styled.a`
  margin-left: 14px;
  font-size: 16px;
  border-spacing: 15px;
  padding-bottom: 20px;
  color: #ffff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-bottom: 2px solid transparent;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #ffff;
  }
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
const LogoCtn = styled.div``;

const LinksCtn = styled.div`
display:flex;

`;
