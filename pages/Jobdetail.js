import { Box } from "@material-ui/core";
import React from "react";
import NavBar from "../components/NavBar";
import { Container, SocialNetworks, Header } from "../styles/jobdetail.styles";

export default function JobDetail() {
  return (
    <Container>
      <SocialNetworks />
      <NavBar isHome={false} />

      <Header>
        <Box className="overlay">
          <h2>Atención a clientes bilingüe$13,000 mas BONOS /HOME OFFICE</h2>
        </Box>
      </Header>
    </Container>
  );
}
