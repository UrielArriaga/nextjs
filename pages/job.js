import { Box, Grid } from "@material-ui/core";
import {
  AddCircle,
  AddCircleOutline,
  Android,
  Apple,
  ArrowForwardIos,
  ArrowRight,
  Bookmark,
  Build,
  Code,
  CreditCard,
  LocalAtm,
  LocationCity,
  LocationOn,
  PersonOutline,
  Room,
  Search,
  SearchOutlined,
  VerifiedUser,
} from "@material-ui/icons";
import Image from "next/image";
import Link from "next/link";
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
  GridLayout,
  ItemJob,
  SectionAside,
  JobsByCategory,
  JobsContainer,
  JobPopular,
  Test,
  NumbersSection,
  BestSection,
  PaymentSection,
  AppSection,
} from "../styles/job.styles";

export default function Job() {
  const stl = useStyles();
  const [optionSelect, setOptionSelect] = useState("");
  return (
    <Box className={stl.wrapper}>
      <Hero>
        <Layer>
        <NavBar isHome={true} />
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
                    defaultValue=""
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
      {/* <div style={{ marginTop: 100, border: "1px solid gray" }}></div> */}
      <JobsContainer>
        <GridLayout container>
          <Grid item xs={12} md={9} lg={9}>
            <SectionJobs>
              <div className="filter">
                <div className="title">
                  <h4>NUEVOS TRABAJOS</h4>
                  <hr className="dashed"></hr>
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
                      optionSelect === "completetime"
                        ? "option-select"
                        : "option"
                    }
                    onClick={() => setOptionSelect("completetime")}
                  >
                    <p>Tiempo Completo</p>
                  </div>
                </div>
              </div>

              {[1, 2, 3, 5].map((item, index) => (
                <ItemJob key={index}>
                  <Box className="row_job">
                    <div className="leftSide">
                      <Image
                        className="img"
                        src="/img1.png"
                        alt="me"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="rightSide">
                      <p className="title">Software Engineer</p>
                      <p className="subTitle">MizTech</p>
                      <FlexRow className="locationC">
                        <FlexRow>
                          <LocationOn className="icon" />
                          <p className="location">Ciudad de mexico, Centro </p>
                        </FlexRow>
                      </FlexRow>
                    </div>
                  </Box>
                  <Link href="/Jobdetail">
                    <Box className="actions">
                      <div className="timeJob">
                        <p>Tiempo completo</p>
                      </div>
                      <input
                        type="button"
                        value="Aplicar Ahora"
                        className="btn_apply"
                      />
                    </Box>
                  </Link>
                </ItemJob>
              ))}

              <Grid container spacing={0} className="loginContainer">
                <Grid item xs={12} md={6} className="loginLikeEm">
                  <PersonOutline className="icon" />
                  <h4 className="title">BUSCO EMPLEO</h4>
                  <p className="description">
                    Ex cillum ullamco eu elit nostrud nisi. Do ad consectetur
                    nisi laborum cupidatat id. Proident incididunt eiusmod non
                    amet ullamco nulla ex ullamco esse tempor occaecat.
                  </p>

                  <Box className="flex_btn">
                    <input
                      className="btn_apply"
                      type="button"
                      value="Aplicar Ahora"
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={6} className="loginLikeFind">
                  <Box className="img_overlay">
                    <LocationCity className="icon" />
                    <h4 className="title">BUSCO TALENTO</h4>
                    <p className="description">
                      Ex cillum ullamco eu elit nostrud nisi. Do ad consectetur
                      nisi laborum cupidatat id. Proident incididunt eiusmod non
                      amet ullamco nulla ex ullamco esse tempor occaecat magna
                      qui.
                    </p>

                    <Box className="flex_btn">
                      <input
                        className="btn_apply"
                        type="button"
                        value="Busco Talento"
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </SectionJobs>
          </Grid>

          <Grid item xs={12} md={3} lg={3}>
            <SectionAside>
              <JobsByCategory>
                <Box className="heading">
                  <h4>Trabajos por categoria</h4>
                </Box>
                <Box className="content">
                  {[1, 2, 3, 4, 6, 7, 8].map((item, index) => (
                    <Link href="/" key={index}>
                      <FlexRow className="separation">
                        <ArrowRight className="colorIcon" />
                        <p className="category">Diseño Grafico (245)</p>
                      </FlexRow>
                    </Link>
                  ))}
                </Box>
                <Box className="flex_btn">
                  <FlexRow className="separation">
                    <ArrowRight className="colorIcon" />
                    <p className="category_all">Ver todas la categorias)</p>
                  </FlexRow>
                </Box>
              </JobsByCategory>
              <JobPopular>
                <Box className="heading">
                  <h4>Trabajo patrocinado</h4>
                </Box>
                <Box className="content">
                  <img src="http://www.webstrot.com/html/tm/thejobs/images/content/spotlight_img.jpg" />
                  <h4 className="separation">Ejecutivo/Asesor De Ventas</h4>
                  <p className="separation">Webstrot Technology Ltd.</p>
                  <FlexRow className="separation">
                    <LocalAtm className="colorIcon" />
                    <p>6,000MXN - 10,000MXN</p>
                  </FlexRow>
                  <FlexRow className="separation">
                    <Room className="colorIcon" />
                    <p>Guadalajara, Jal.</p>
                  </FlexRow>
                </Box>
                <Box className="flex_btn">
                  <input
                    className="btn_apply"
                    type="button"
                    value="Aplicar Ahora"
                  />
                </Box>
              </JobPopular>
            </SectionAside>
          </Grid>
        </GridLayout>
      </JobsContainer>

      <NumbersSection>
        <Box className="item_count">
          <p className="count">2540 +</p>
        </Box>
        <Box className="item_count bg_dark ">
          <p className="count">2540 +</p>
        </Box>
        <Box className="item_count">
          <p className="count">2540 +</p>
        </Box>
        <Box className="item_count  bg_dark">
          <p className="count">2540 +</p>
        </Box>
      </NumbersSection>

      <BestSection>
        <Box className="heading">
          <h4>¿POR QUE USAR CVJOBS?</h4>
        </Box>
        <Box className="container">
          <Box className="row">
            <Box className="item_offer">
              <Box>
                <SearchOutlined className="icon" />
              </Box>
              <Box className="info">
                <h4>Buscar empleo</h4>
                <p>
                  Ad sit cillum aute sit et ad fugiat cupidatat mollit occaecat
                  sunt dolore deserunt ullamco.
                </p>
              </Box>
            </Box>
            <Box className="item_offer">
              <Box>
                <VerifiedUser className="icon" />
              </Box>
              <Box className="info">
                <h4>Tu informacion esta segura</h4>
                <p>
                  Ad sit cillum aute sit et ad fugiat cupidatat mollit occaecat
                  sunt dolore deserunt ullamco.
                </p>
              </Box>
            </Box>
            <Box className="item_offer">
              <Box>
                <SearchOutlined className="icon" />
              </Box>
              <Box className="info">
                <h4>Buscar empleo</h4>
                <p>
                  Ad sit cillum aute sit et ad fugiat cupidatat mollit occaecat
                  sunt dolore deserunt ullamco.
                </p>
              </Box>
            </Box>
          </Box>
          <Box className="row">
            <Box className="item_offer">
              <Box>
                <SearchOutlined className="icon" />
              </Box>
              <Box className="info">
                <h4>Buscar empleo</h4>
                <p>
                  Ad sit cillum aute sit et ad fugiat cupidatat mollit occaecat
                  sunt dolore deserunt ullamco.
                </p>
              </Box>
            </Box>

            <Box className="item_offer">
              <Box>
                <SearchOutlined className="icon" />
              </Box>
              <Box className="info">
                <h4>Buscar empleo</h4>
                <p>
                  Ad sit cillum aute sit et ad fugiat cupidatat mollit occaecat
                  sunt dolore deserunt ullamco.
                </p>
              </Box>
            </Box>
            <Box className="item_offer">
              <Box>
                <SearchOutlined className="icon" />
              </Box>
              <Box className="info">
                <h4>Buscar empleo</h4>
                <p>
                  Ad sit cillum aute sit et ad fugiat cupidatat mollit occaecat
                  sunt dolore deserunt ullamco.
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </BestSection>

      <PaymentSection>
        <Box className="item_pay">
          <Box className="heading">
            <FlexColumn>
              <h4>PLAN BASICO</h4>
              <hr style={{ border: "1px solid #23C0E9", marginTop: 5 }} />
            </FlexColumn>
            <Box className="price">
              <p className="price_number">$1000MXN</p>
            </Box>
          </Box>

          <Box className="features">
            <Box className="divider">
              <AddCircle />
              <p>Publica 1 oferta laboral</p>
            </Box>

            <Box className="divider">
              <AddCircle />
              <p>1 Mes de duracion</p>
            </Box>
            <Box className="divider">
              <AddCircle />
              <p>1 Mes de duracion</p>
            </Box>
            <Box className="divider">
              <AddCircle />
              <p>1 Mes de duracion</p>
            </Box>
          </Box>

          <Box className="action">
            <input className="btn_apply" type="button" value="Aplicar Ahora" />
          </Box>
        </Box>
        <Box className="item_pay">
          <Box className="heading">
            <FlexColumn>
              <h4>PLAN BASICO</h4>
              <hr style={{ border: "1px solid #37D09C", marginTop: 5 }} />
            </FlexColumn>
            <Box className="price bg_green">
              <p className="price_number">$1000MXN</p>
            </Box>
          </Box>

          <Box className="features">
            <FlexRow className="divider">
              <AddCircle />
              <p>Publica 1 oferta laboral</p>
            </FlexRow>

            <FlexRow className="divider">
              <AddCircle />
              <p>1 Mes de duracion</p>
            </FlexRow>
            <FlexRow className="divider">
              <AddCircle />
              <p>1 Mes de duracion</p>
            </FlexRow>
            <FlexRow className="divider">
              <AddCircle />
              <p>1 Mes de duracion</p>
            </FlexRow>
          </Box>

          <Box className="action">
            <input className="btn_apply" type="button" value="Aplicar Ahora" />
          </Box>
        </Box>
        <Box className="item_pay">
          <Box className="heading">
            <FlexColumn>
              <h4>PLAN BASICO</h4>
              <hr style={{ border: "1px solid #F36969", marginTop: 5 }} />
            </FlexColumn>
            <Box className="price bg_red">
              <p className="price_number">$1000MXN</p>
            </Box>
          </Box>

          <Box className="features">
            <FlexRow className="divider">
              <AddCircle />
              <p>Publica 1 oferta laboral</p>
            </FlexRow>

            <FlexRow className="divider">
              <AddCircle />
              <p>1 Mes de duracion</p>
            </FlexRow>
            <FlexRow className="divider">
              <AddCircle />
              <p>1 Mes de duracion</p>
            </FlexRow>
            <FlexRow className="divider">
              <AddCircle />
              <p>1 Mes de duracion</p>
            </FlexRow>
          </Box>

          <Box className="action">
            <input className="btn_apply" type="button" value="Aplicar Ahora" />{" "}
          </Box>
        </Box>
      </PaymentSection>

      <AppSection>
        <Box className="img_overlay">
          <Box className="info">
            <h4>Descarga CVJOBS App</h4>
            <p>
              Descargala en menos de un minuto y disfruta de todos los
              beneficios
            </p>
            <Box className="btns_content">
              <Box className="btn_apply">
                <Apple />
                <input className="btn" type="button" value="App Store" />
              </Box>

              <Box className="btn_apply">
                <Android />
                <input className="btn" type="button" value="Play store" />
              </Box>
            </Box>
          </Box>
          <Box className="photoapp">
            <img className="img" src="/app.png" />
          </Box>
        </Box>
      </AppSection>

      <div style={{ marginTop: 100 }}></div>
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
