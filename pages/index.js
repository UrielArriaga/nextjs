import { Box, Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Head from "next/head";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { useStyles, Container, FlexRow } from "../styles/home.styles";

export default function Home() {
  const stl = useStyles();
  const {
    wrapper,
    hero,
    homeText,
    titles,
    flexColumn,
    flexRow,
    spColor,
    title,
    inputsBox,
    subtitle,
    input,
    btnSearch,
    btnClick
  } = stl;

  return (
    <Box className={wrapper}>
      <Box className={hero}>
        <NavBar />
        <Container className={homeText}>
          <Box className={titles}>
            <Box className={flexColumn}>              
              <h1 className={title}><span className={spColor}>3,000+</span>Browse Jobs</h1>
              <p className={subtitle}>Find Jobs, Employment & Career Opportunities</p>
            </Box>
          </Box>
          <Box className={inputsBox}>
            <input className={input} placeholder="Palabras clave,Nombre de puesto,Descripcion,Tags"/>
            <input className={input} placeholder="Lugar" />
            <FlexRow className={btnSearch}>
              <Search />
              <button className={btnClick}>Buscar</button>
            </FlexRow>
          </Box>
        </Container>        
      </Box>
    </Box>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .title-container {
    display: flex;
    flex-direction: column;
  }
  .subtitle-box {
    p {
      color: #bbbcc2;
      font-size: 20px;
    }
  }
  .title-row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .quantity {
    color: #23c0e9;
    font-size: 70px;
    /* font-weight: bold; */
    margin-right: 20px;
  }
  h1 {
    font-size: 70px;
    color: #ffff;
    font-weight: lighter;
  }
  .input-box {
    background-color: #535864;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    input {
      height: 50px;
      border-radius: 25px;
      border: none;
    }
    button {
      height: 50px;
      width: 90px;
      border-radius: 25px;
      border: none;
    }
  }
`;

const Hero = styled.div`
  border: 1px solid red;
  /* height: 70vh; */
  /* background-color:#363C4B;  */
  /* opacity:0.7; */
  /* background-color: #000;
  opacity: 1; */
`;
const Layer = styled.div`
  height: 80vh;
  background-color: #363c4b;
  opacity: 0.9;
`;

const Wrapper = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  height: 80vh;
  background-position: center;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1577412647305-991150c7d163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
`;

// width: 100%;
// max-width:969px;

{
  /* <Hero>
<Head>
  <title>CVJOBS - INICO</title>
  <link rel="icon" href="/favicon.ico" />
  <meta
    name="description"
    content="Meta description content goes here."
  />
</Head> */
}
{
  /* <Wrapper>
<Layer>
<NavBar />
<Content>
  <div className="title-container">
    <div className="title-row">
      <span className="quantity">3,000+</span>
      <h1>Busqueda de empleo</h1>
    </div>

    <div className="subtitle-box">
      <p>Busca trabajo, haz crecer tu carrera, </p>
    </div>

    <div className="input-box">
      <input />
      <input />
      <input />
      <button>Buscar</button>
    </div>
  </div>
</Content>
</Layer>
</Wrapper> */
}
// </Hero>
