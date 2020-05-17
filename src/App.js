import React from "react";
import "./App.css";
import { JustStart } from "./Day01/JustStart";
import { DefaultTypography } from "./Day01/DefaultTypography";
import { OverridingGlobalTypography } from "./Day01/OverridingGlobalTypography";
import { Button } from "@material-ui/core";
import { AppBarExample } from "./Day02/AppBarExample";
import { BoxExample } from "./MaterialUICOmponents/Layout/BoxExample";
import { ContainerExample } from "./MaterialUICOmponents/Layout/ContainerExample";

function App() {
  return (
    <div>
      {/* <AppBarExample /> */}
      {/* <BoxExample /> */}
      <ContainerExample />
      {/* <JustStart />
      <DefaultTypography />
      <OverridingGlobalTypography />

      <Button variant="contained" color={"secondary"}>
        This is main button
      </Button> */}
    </div>
  );
}

export default App;
