import { Box, Grid } from "@material-ui/core";
import {
  Bookmark,
  Build,
  Code,
  CreditCard,
  LocalAtm,
  Search,
} from "@material-ui/icons";
import Image from "next/image";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import {
  useStyles,
  Wrraper,
  FlexRow,
  FlexColumn,
  Hero,
  colors,
  Category,
  Container,
  Layer,
} from "../public/home.styles";

export default function Home() {
  const stl = useStyles();

  return (
    <Box className={stl.wrapper}>
      <Hero>
        <Layer>
          <NavBar />
          <Wrraper className={stl.homeText}>
            <Box className={stl.firstHalf}>              
              <Box className={stl.flexColumn}>
                <h1 className={stl.title}>
                  <span className={stl.spColor}>3,000+</span>Los mejores empleos
                </h1>
                <p className={stl.subtitle}>
                  Encuentra empleos,Haz crecer tu futuro & Busca el mejor
                  talento en CVJOBS
                </p>
              </Box>              
              <FlexColumn>
                <Box className={stl.inputsBox}>
                  <input
                    className={stl.input}
                    placeholder="Palabras clave,Nombre de puesto,Descripcion,Tags"
                  />
                  <input className={stl.input} placeholder="Lugar" />
                  <FlexRow className={stl.btnSearch}>
                    <Search />
                    <button className={stl.btnClick}>Buscar</button>
                  </FlexRow>
                </Box>
                <FlexRow className={stl.flexWrap}>
                  <BookColor />
                  <p className={stl.searchTop}>Busquedas populares: </p>
                  <p className={stl.topByOne}>ui designer</p>
                  <p className={stl.topByOne}>developer</p>
                  <p className={stl.topByOne}>seniorit company</p>
                  <p className={stl.topByOne}>design</p>
                  <p className={stl.topByOne}>call center</p>
                </FlexRow>
              </FlexColumn>
            </Box>
            <Box className={stl.secondHalf}>
              <Box className={stl.categories}>
                <Category>
                  <Code className="ctgIcon" />
                  <p className="ctgTitle">Desarrollo</p>
                  <p className="ctgSubtitle">(40 oportunidades)</p>
                </Category>
                <Category>
                  <Build className="ctgIcon" />
                  <p className="ctgTitle">Construccion</p>
                  <p className="ctgSubtitle">(40 oportunidades)</p>
                </Category>
                <Category>
                  <LocalAtm className="ctgIcon" />
                  <p className="ctgTitle">Finanzas</p>
                  <p className="ctgSubtitle">(40 oportunidades)</p>
                </Category>
                <Category>
                  <CreditCard className="ctgIcon" />
                  <p className="ctgTitle">Ventas</p>
                  <p className="ctgSubtitle">(40 oportunidades)</p>
                </Category>
                <Category>
                  <LocalAtm className="ctgIcon" />
                  <p className="ctgTitle">Finanzas</p>
                  <p className="ctgSubtitle">(40 oportunidades)</p>
                </Category>
                <Category>
                  <CreditCard className="ctgIcon" />
                  <p className="ctgTitle">Ventas</p>
                  <p className="ctgSubtitle">(40 oportunidades)</p>
                </Category>
              </Box>
            </Box>
          </Wrraper>
        </Layer>
      </Hero>

      <Container>
        <Image
          src="/lol.png"
          alt="me"
          width="1500"
          height="600"
          style={{ marginTop: 10 }}
        />
        <Grid container style={{ marginTop: 100 }}>
          <Grid item lg={9} xs={12}>
            <ItemJob>              
              <Image src="/job.png" alt="me" width="60" height="50" />                                          
            </ItemJob>
            <p>first</p>
          </Grid>

          <Grid item lg={3} style={{ border: "1px solid green" }}>
            <p>second sss</p>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const ItemJob = styled.div`
  background-color: #fff;
  width: 100%;
  height: 200px;
  border-left: 3px solid #4dd0e1;
`;

const BookColor = styled(Bookmark)`
  color: ${colors.primaryColor};
`;

const Wrapper = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  height: 80vh;
  background-position: center;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1577412647305-991150c7d163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
`;
