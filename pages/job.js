import { Box } from "@material-ui/core";
import {
  Bookmark,
  Build,
  Code,
  CreditCard,
  LocalAtm,
  Search,
} from "@material-ui/icons";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { colors } from "../public/home.styles";
import {
  useStyles,
  Wrraper,
  FlexRow,
  FlexColumn,
  Hero,
  Category,
  Layer,
} from "../styles/job.styles";

export default function Job({ stars }) {
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
    </Box>
  );
}


const BookColor = styled(Bookmark)`
  color: ${colors.primaryColor};
`;

const Container = styled.div`
  /* border: 1px solid red; */
  /* height: 80vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  padding-top: 30px;
  padding: 20px;
  /* border:2px solid red;   */
  margin: auto;
  margin-bottom: 300px;
  background-color: #f9f9f9;

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
    max-width: 658px;
    padding: 10px;
    /* background-color: green; */
  }
`;