import React from "react";
import { Container, Box } from "@material-ui/core";

export const ContainerExample = () => {
  return (
    <Container maxWidth="sm">
      <Box
        bgcolor="#eee"
        height={"100vh"}
        p={3}
        border={1}
        borderColor="#c1c1c1"
      >
        Container Fluid example
      </Box>
    </Container>
  );
};
