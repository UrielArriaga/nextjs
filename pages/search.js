import React from "react";
import {
  Container,
  FlexRow,
  Header,
  SocialNetworks,
} from "../styles/search.styles";
import NavBar from "../components/NavBar";
import { Box } from "@material-ui/core";
export default function Search() {
  return (
    <Container>
      <SocialNetworks />
      <NavBar isHome={false} />

      <Header>
        <Box className="overlay">
          <Box className="wrapper">
            <Box className="inputs_box">
              <input
                className="input"
                placeholder="Palabras clave,Nombre de puesto,Descripcion,Tags"
              />
              <select name="select" className="input_select" defaultValue="">
                <option value="value1">Lugar</option>
                <option value="value2" selected>
                  Value 2
                </option>
                <option value="value3">Value 3</option>
              </select>
              <FlexRow className="btn_container">
                <Search />
                <input type="button" className="btn_search" value="Buscar" />
              </FlexRow>
            </Box>
          </Box>
        </Box>
      </Header>
    </Container>
  );
}


// .inputs_box {
//   display: "flex";
//   height: 110;
//   align-items: "center";
//   flex-direction: column;
//   @media ${device.md} {
//     flex-direction: row;
//   }

//   .input {
//     width: 100%;
//     height: 50px;
//     border-radius: 15px;
//     padding-left: 15px;
//     padding-right: 15px;
//     border: none;
//     margin-bottom: 15px;
//     color: #535864;
//     &:focus {
//       outline: none;
//     }

//     .input_select {
//       width: 100%;
//       height: 50;
//     }
//   }

//   .btn_container {
//     width: 100%;
//     height: 50px;
//     border-radius: 15px;
//     padding-left: 15px;
//     padding-right: 15px;
//     background-color: ${colors.primaryColor};
//     color: #fff;
//     justify-content: center;
//   }

//   .btn_search {
//     height: 100%;
//     /* width:100%; */
//     background: transparent;
//     border: none;
//     color: #fff;
//     font-weight: bold;
//     font-size: 18px;
//   }
// }