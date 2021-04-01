import { Box, Grid } from "@material-ui/core";
import {
  Bookmark,
  Build,
  Code,
  CreditCard,
  LocalAtm,
  LocationCity,
  LocationOn,
  Search,
} from "@material-ui/icons";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { colors } from "../public/home.styles";
import {
  useStyles,
  Wrraper,
  FlexRow,
  FlexColumn,
  SectionJobs,
  Hero,
  Category,
  Layer,
  ItemJob,
  ChildContainer,
  JobPopular
} from "../styles/job.styles";

export default function Job() {
  const stl = useStyles();

  const [optionSelect, setOptionSelect] = useState("");

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
                  <select
                    name="select"
                    className={stl.inputSelect}
                    value={"as"}
                  >
                    <option value="value1">Lugar</option>
                    <option value="value2" selected>
                      Value 2
                    </option>
                    <option value="value3">Value 3</option>
                  </select>
                  {/* <input className={stl.input} placeholder="Lugar" /> */}
                  <FlexRow className={stl.btnSearch}>
                    <Search />
                    <input
                      type="button"
                      className={stl.btnClick}
                      value="Buscar"
                    />
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
      <div style={{ marginTop: 100 }}></div>
      <ChildContainer>
      <Grid container>
        <Grid item  md={12} lg={9} xs={12}>
          <SectionJobs>
            <div className="filter">
              <div className="title">
                <p>NUEVOS TRABAJOS</p>
                <hr class="dashed"></hr>
              </div>
              <div className="secondHalf">
                <div
                  className={
                    optionSelect === "recientes" ? "option-select" : "option"
                  }
                  onClick={() => setOptionSelect("recientes")}
                >
                  <p>Nuevos</p>
                </div>
                <div
                  className={
                    optionSelect === "halftime" ? "option-select" : "option"
                  }
                  onClick={() => setOptionSelect("halftime")}
                >
                  <p>Medio Tiempo</p>
                </div>
                <div
                  className={
                    optionSelect === "completetime" ? "option-select" : "option"
                  }
                  onClick={() => setOptionSelect("completetime")}
                >
                  <p>Tiempo Completo</p>
                </div>
              </div>
            </div>
            {[1, 2, 3, 4].map((item, índex) => (
              <ItemJob>
                <div className="leftSide">
                  <Image src="/img1.png" alt="me" width="50" height="50" />
                </div>
                <div className="rightSide">
                  <p className="title">Software Engineer</p>
                  <p className="subTitle">MizTech</p>
                  <FlexRow className="locationC">
                    <FlexRow>
                      <LocationOn style={{ color: `${colors.primaryColor}` }} />
                      <p className="location">Ciudad de mexico</p>
                    </FlexRow>
                    <FlexRow>
                      <LocationOn style={{ color: `${colors.primaryColor}` }} />
                      <p className="location">New york</p>
                    </FlexRow>
                  </FlexRow>
                  <div className="timeJob">
                    <p>Tiempo completo</p>
                  </div>
                </div>
                {/* <div className="actions">

            </div> */}
              </ItemJob>
            ))}
          </SectionJobs>
        </Grid>

        <Grid item md={12}  xs={12} lg={3}>
          <div >
              <JobPopular>
                
              </JobPopular>
          </div>
        </Grid>
      </Grid>
      </ChildContainer>
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
