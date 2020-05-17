import React from "react";
import { Box, Typography, Button } from "@material-ui/core";

const defaultProps = {
  bgcolor: "background.paper",
  border: 1,
  m: 1,
  borderColor: "text.primary",
  style: { width: "30rem", height: "5rem" },
};

const defaultProps1 = {
  bgcolor: "#e1e1e1",
  border: 0,
  m: 1,
  p: 1,
  borderColor: "text.primary",
  style: { width: "5rem", height: "5rem" },
};

export const BoxExample = () => {
  return (
    <>
      <Typography variant="body1">
        <Box color="primary.main">This is Box layout example</Box>
        <Box color="primary.dark">This is Box layout example</Box>
        <Box color="primary.light">This is Box layout example</Box>
        <Box color="secondary.main">This is Box layout example</Box>
        <Box color="secondary.dark">This is Box layout example</Box>
        <Box color="secondary.light">This is Box layout example</Box>
      </Typography>
      <Box bgcolor="primary.main" color="primary.contrastText">
        primary.main
      </Box>
      <Box bgcolor="primary.dark" component="span" color="primary.contrastText">
        primary.dark
      </Box>
      <Box bgcolor="primary.light" color="primary.contrastText">
        primary.light
      </Box>
      <Box bgcolor="secondary.main" color="secondary.contrastText">
        secondary.main
      </Box>
      <Box bgcolor="secondary.dark" color="secondary.contrastText">
        secondary.dark
      </Box>
      <Box bgcolor="secondary.light" color="secondary.contrastText">
        secondary.light
      </Box>

      <Box bgcolor="warning.main" color="secondary.contrastText">
        warning.main
      </Box>
      <Box bgcolor="success.main" color="secondary.contrastText">
        success.main
      </Box>
      <Box bgcolor="info.main" color="secondary.contrastText">
        info.main
      </Box>
      <Box bgcolor="text.primary" color="secondary.contrastText">
        text.primary
      </Box>
      <Box bgcolor="text.secondary" color="secondary.contrastText">
        text.secondary
      </Box>
      <Typography variant="h6">Box with padding and margin Example</Typography>
      <Box
        bgcolor="text.disabled"
        p={3}
        mt={1}
        mb={2}
        color="secondary.contrastText"
      >
        text.disabled
      </Box>
      <Box
        bgcolor="text.disabled"
        p={3}
        mt={1}
        mb={2}
        color="secondary.contrastText"
      >
        text.disabled
      </Box>
      <Typography variant="h6">Box with border Aditive Example</Typography>
      <Box border={2} m={2} p={2}>
        Full Border with width 2px
      </Box>
      <Box borderTop={1} m={2} p={2}>
        Top Border
      </Box>
      <Box borderBottom={1} m={2} p={2}>
        Bottom Border
      </Box>

      <Box borderLeft={6} m={2} p={2}>
        Left Border
      </Box>
      <Box borderRight={10} m={2} p={2}>
        Right Border
      </Box>

      <Typography variant="h6">Box with border Subtractive Example</Typography>
      <Box {...defaultProps} border={0}>
        No Border with width 2px
      </Box>
      <Box {...defaultProps} borderTop={0}>
        No Top Border
      </Box>
      <Box {...defaultProps} borderBottom={0}>
        No Bottom Border
      </Box>

      <Box {...defaultProps} borderLeft={0}>
        No Left Border
      </Box>
      <Box {...defaultProps} borderRight={0}>
        No Right Border
      </Box>

      <Typography variant="h6">Box with border radius Example</Typography>
      <Box {...defaultProps1} borderRadius="50%" />
      <Box {...defaultProps1} borderRadius="borderRadius" />
      <Box {...defaultProps1} borderRadius={20} />

      <Typography variant="h6">Box with button Example</Typography>
      <Box
        m={4}
        bgcolor="primary.light"
        width={300}
        borderRadius={30}
        overflow="hidden"
      >
        <Button fullWidth>Click Me</Button>
      </Box>

      <Box m={4} borderRadius={10} width={300}>
        <Button variant="outlined" color="primary" fullWidth>
          Click Me
        </Button>
      </Box>
      <Box m={4} borderRadius={10} width={300}>
        <Button variant="contained" color="primary" fullWidth>
          Click Me
        </Button>
      </Box>
      <Box m={4} borderRadius={10} width={300}>
        <Button color="secondary" fullWidth>
          Click Me
        </Button>
      </Box>

      <Typography variant="h6">
        Box with display using screen size Example
      </Typography>
      <Box display={{ xs: "block", md: "none" }}>
        hide on screens wider than md
      </Box>
      <Box display={{ xs: "none", md: "block" }}>
        hide on screens smaller than md
      </Box>

      <Typography variant="h6">
        Box with display inline and block Example
      </Typography>
      <Box p={2} m={2} bgcolor="#e3e3e3">
        <Box
          component="div"
          display="inline"
          p={1}
          m={1}
          borderRadius={1}
          bgcolor="#fff"
        >
          Inline
        </Box>
        <Box
          component="div"
          display="inline"
          p={1}
          m={5}
          borderRadius={1}
          bgcolor="#fff"
        >
          Inline
        </Box>
      </Box>

      <Box p={1} m={2} bgcolor="#e3e3e3">
        <Box
          component="div"
          display="block"
          p={1}
          m={1}
          borderRadius={1}
          bgcolor="#fff"
        >
          Block
        </Box>
        <Box
          component="div"
          display="block"
          p={1}
          m={1}
          borderRadius={1}
          bgcolor="#fff"
        >
          Block
        </Box>
      </Box>
      <Typography variant="h6">Box with text overflow Example</Typography>
      <Box
        p={2}
        m={2}
        width={200}
        component="div"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        A quick brown fox jumps over a lazy dog.
      </Box>

      <Typography variant="h6">Box FlexBox Example</Typography>

      <Typography variant="h6">Box FlexBox row Example</Typography>
      <Box p={3} m={3} display="flex" bgcolor="#eee" flexDirection="row">
        <Box m={1} p={1} bgcolor="#fff">
          Item 1
        </Box>
        <Box m={1} p={1} bgcolor="#fff">
          Item 2
        </Box>
        <Box m={1} p={1} bgcolor="#fff">
          Item 3
        </Box>
        <Box m={1} p={1} bgcolor="#fff">
          Item 4
        </Box>
        <Box m={1} p={1} bgcolor="#fff">
          Item 5
        </Box>
      </Box>
      <Typography variant="h6">Box FlexBox row reverse Example</Typography>
      <Box
        p={3}
        m={3}
        display="flex"
        bgcolor="#eee"
        flexDirection="row-reverse"
      >
        <Box m={1} p={1} bgcolor="#fff">
          Item 1
        </Box>
        <Box m={1} p={1} bgcolor="#fff">
          Item 2
        </Box>
        <Box m={1} p={1} bgcolor="#fff">
          Item 3
        </Box>
        <Box m={1} p={1} bgcolor="#fff">
          Item 4
        </Box>
        <Box m={1} p={1} bgcolor="#fff">
          Item 5
        </Box>
      </Box>

      <Typography variant="h6">Box FlexBox flex wrap Example</Typography>
      <Box
        p={3}
        m={3}
        display="flex"
        bgcolor="#eee"
        flexWrap="wrap"
        width={300}
      >
        <Box m={1} p={1} bgcolor="#fff">
          Item 1
        </Box>
        <Box m={1} p={1} bgcolor="#fff">
          Item 2
        </Box>
        <Box m={1} p={1} bgcolor="#fff">
          Item 3
        </Box>
        <Box m={1} p={1} bgcolor="#fff">
          Item 4
        </Box>
        <Box m={1} p={1} bgcolor="#fff">
          Item 5
        </Box>
      </Box>

      <Typography variant="h6">Box FlexBox order Example</Typography>
      <Box p={3} m={3} display="flex" bgcolor="#eee">
        <Box m={1} p={1} bgcolor="#fff" order={2}>
          Item 1
        </Box>
        <Box m={1} p={1} bgcolor="#fff" order={1}>
          Item 2
        </Box>
        <Box m={1} p={1} bgcolor="#fff" order={3}>
          Item 3
        </Box>
        <Box m={1} p={1} bgcolor="#fff" order={5}>
          Item 4
        </Box>
        <Box m={1} p={1} bgcolor="#fff" order={4}>
          Item 5
        </Box>
      </Box>

      <Typography variant="h6">Box FlexBox flex grow Example</Typography>
      <Box p={3} m={3} display="flex" bgcolor="#eee">
        <Box m={1} p={1} bgcolor="#fff">
          Item 1
        </Box>
        <Box m={1} p={1} flexGrow={1}></Box>
        <Box m={1} p={1} bgcolor="#fff">
          Item 2
        </Box>
        <Box m={1} p={1} bgcolor="#fff">
          Item 3
        </Box>
        <Box m={1} p={1} bgcolor="#fff">
          Item 4
        </Box>
      </Box>

      <Typography variant="h6">Box shadow Example</Typography>
      <Box {...defaultProps1} boxShadow={0}>
        Item
      </Box>
      <Box {...defaultProps1} boxShadow={2}>
        Item
      </Box>
      <Box {...defaultProps1} boxShadow={3}>
        Item
      </Box>
      <Box {...defaultProps1} boxShadow={3} borderRadius={8}>
        Item
      </Box>

      <Typography variant="h6">Box width Example</Typography>
      <Box p={3} m={3} display="block" bgcolor="#eee">
        <Box m={1} p={1} bgcolor="success.dark" order={2} width={1 / 4}>
          width=1 / 4
        </Box>
        <Box m={1} p={1} bgcolor="info.main" order={1} width={300}>
          width=300
        </Box>
        <Box m={1} p={1} bgcolor="primary.light" order={3} width={"50%"}>
          width="50%"
        </Box>
        <Box m={1} p={1} bgcolor="secondary.light" order={5} width={1}>
          width=1
        </Box>
        <Box m={1} p={1} bgcolor="error.light" order={4} width={1 / 8}>
          width=1/8
        </Box>
      </Box>

      <Typography variant="h6">Box height Example</Typography>
      <Box p={3} width={"100%"} height={300} bgcolor="#eee">
        <Box
          m={1}
          p={1}
          display="inline-block"
          bgcolor="success.dark"
          height={1 / 4}
        >
          height=1 / 4
        </Box>
        <Box
          m={1}
          p={1}
          display="inline-block"
          bgcolor="info.main"
          height={"50%"}
        >
          height=300
        </Box>
        <Box
          m={1}
          p={1}
          display="inline-block"
          bgcolor="primary.light"
          height={"50%"}
        >
          height="50%"
        </Box>
        <Box
          m={1}
          p={1}
          display="inline-block"
          bgcolor="secondary.light"
          height={1}
        >
          height=1
        </Box>
        <Box
          m={1}
          p={1}
          display="inline-block"
          bgcolor="error.light"
          height={1 / 8}
        >
          height=1/8
        </Box>
      </Box>

      <Typography variant="h6">
        Box Horizontal centering using margin Example
      </Typography>
      <Box
        p={3}
        width={"90%"}
        bgcolor="background.paper"
        boxShadow={3}
        mx={"auto"}
        borderRadius={8}
        my={6}
      >
        <Box
          mx={"auto"}
          p={1}
          width={400}
          textAlign="center"
          color="primary.contrastText"
          bgcolor="primary.dark"
          letterSpacing={3}
          fontWeight="bold"
        >
          Center Horizontally
        </Box>
      </Box>
    </>
  );
};
