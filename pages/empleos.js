import { Box, Grid, Link } from "@material-ui/core";
import { ArrowRight, LocationOn, Search } from "@material-ui/icons";
import Image from "next/image";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { ItemJob, JobsByCategory } from "../styles/job.styles";
import {
  Container,
  FlexColumn,
  FlexRow,
  Filter,
  Header,
  SocialNetworks,
  ResultsSection,
} from "../styles/search.styles";

export default function Empleos() {
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [openThird, setOpenThird] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  const [openFive, setOpenFive] = useState(false);

  const handleMenu = (item) => {
    switch (item) {
      case 1:
        setOpenFirst(!openFirst);
        setOpenSecond(false);
        setOpenThird(false);
        setOpenFour(false);
        setOpenFive(false);
        break;
      case 2:
        setOpenSecond(!openSecond);
        setOpenFirst(false);
        setOpenThird(false);
        setOpenFour(false);
        setOpenFive(false);
        break;
      case 3:
        setOpenThird(!openThird);
        setOpenFirst(false);
        setOpenSecond(false);
        setOpenFour(false);
        setOpenFive(false);
        break;
      case 4:
        setOpenFour(!openFour);
        setOpenFirst(false);
        setOpenSecond(false);
        setOpenThird(false);
        setOpenFive(false);
        break;
      case 5:
        setOpenFive(!openFive);
        setOpenFirst(false);
        setOpenSecond(false);
        setOpenThird(false);
        setOpenFour(false);
        break;

      default:
        break;
    }
  };

  const onBlur = () => {
    setOpenFirst(false);
    setOpenSecond(false);
    setOpenThird(false);
    setOpenFour(false);
    setOpenFive(false);
  };

  const handleBlur = (e) => {
    const currentTarget = e.currentTarget;

    // Check the newly focused element in the next tick of the event loop
    setTimeout(() => {
      // Check if the new activeElement is a child of the original container
      if (!currentTarget.contains(document.activeElement)) {
        // You can invoke a callback or add custom logic here
        onBlur();
      }
    }, 0);
  };

  return (
    <Container>
      <SocialNetworks />
      <NavBar isHome={false} />

      <Header>
        <Box className="overlay">
          <Box className="wrapper">
            <Box className="inputs_box">
              <Box className="column">
                <h4>¿Que empleo buscas?</h4>
                <input
                  className="input"
                  placeholder="Palabras clave,Nombre de puesto,Descripcion,Tags"
                />
              </Box>
              <Box className="column">
                <h4>¿Donde te gustaria trabajar?</h4>
                <select name="select" className="input" defaultValue="">
                  <option value="value1">Lugar</option>
                  <option value="value2" selected>
                    Value 2
                  </option>
                  <option value="value3">Value 3</option>
                </select>
              </Box>
              <FlexRow className="btn_container">
                <Search />
                <input type="button" className="btn_search" value="Buscar" />
              </FlexRow>
            </Box>
            {/* <Filter>
              <Box className="item_filter">
                <Box
                  className="open"
                  onClick={() => handleMenu(1)}
                  //   onBlur={handleBlur}
                >
                  <p>Tipo de contratacion</p>
                </Box>
                {openFirst && (
                  <Box
                    onBlur={() => console.log("blur")}
                    className={`item_menu`}
                  >
                    <p className="option_filter">Indeterminado</p>
                    <p className="option_filter">Tiempo completo</p>
                    <p className="option_filter">Medio tiempo</p>
                  </Box>
                )}
              </Box>

              <Box className="item_filter">
                <Box className="open" onClick={() => handleMenu(2)}>
                  <p>Tipo de contratacion</p>
                </Box>
                {openSecond && (
                  <Box
                    onBlur={() => console.log("blur")}
                    className={`item_menu`}
                  >
                    <p onClick={() => console.log("red")}>sssss</p>
                  </Box>
                )}
              </Box>

              <Box className="item_filter">
                <Box className="open" onClick={() => handleMenu(3)}>
                  <p>Tipo de contratacion</p>
                </Box>
                {openThird && (
                  <Box
                    onBlur={() => console.log("blur")}
                    className={`item_menu`}
                  >
                    <p onClick={() => console.log("red")}>sssss</p>
                  </Box>
                )}
              </Box>

              <Box className="item_filter">
                <Box className="open" onClick={() => handleMenu(4)}>
                  <p>Tipo de contratacion</p>
                </Box>
                {openFour && (
                  <Box
                    onBlur={() => console.log("blur")}
                    className={`item_menu`}
                  >
                    <p onClick={() => console.log("red")}>sssss</p>
                  </Box>
                )}
              </Box>
            </Filter> */}
          </Box>
        </Box>
      </Header>

      <ResultsSection>
        <Grid container style={{display:'flex',flexDirection:'row-reverse'}}>
          <Grid item xs={12} lg={9}>
            {[1, 2, 3, 5, 6, 7, 8].map((item, index) => (
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
          </Grid>

          <Grid item xs={12} lg={3} style={{paddingRight:10}}>

          <JobsByCategory>
                <Box className="heading">
                  <h4>Tipo de contrato</h4>
                </Box>
                <Box className="content">
                  {[1, 2, 3, 4, 6, 7, 8].map((item, index) => (
                    <Link href="/" key={index}>
                      <FlexRow className="separation">
                        <ArrowRight className="colorIcon" />
                        <p className="category">Contrato inmediato</p>
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


              <JobsByCategory>
                <Box className="heading">
                  <h4>Jornada Laboral</h4>
                </Box>
                <Box className="content">
                  {[1, 2, 3, 4, 6, 7, 8].map((item, index) => (
                    <Link href="/" key={index}>
                      <FlexRow className="separation">
                        <ArrowRight className="colorIcon" />
                        <p className="category">Tiempo Completo</p>
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

              <JobsByCategory>
                <Box className="heading">
                  <h4>Jornada Laboral</h4>
                </Box>
                <Box className="content">
                  {[1, 2, 3, 4, 6, 7, 8].map((item, index) => (
                    <Link href="/" key={index}>
                      <FlexRow className="separation">
                        <ArrowRight className="colorIcon" />
                        <p className="category">Tiempo Completo</p>
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
          </Grid>
        </Grid>
      </ResultsSection>
    </Container>
  );
}
