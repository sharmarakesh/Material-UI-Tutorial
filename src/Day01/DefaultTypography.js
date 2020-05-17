import React from "react";
import { Typography } from "@material-ui/core";

export const DefaultTypography = () => {
  return (
    <React.Fragment>
      <Typography variant="h1" component="h1" gutterBottom>
        h1 heading
      </Typography>
      <Typography variant="h2" component="h2" gutterBottom>
        h2 heading
      </Typography>
      <Typography variant="h3" component="h3" gutterBottom>
        h3 heading
      </Typography>
      <Typography variant="h4" component="h4" gutterBottom>
        h4 heading
      </Typography>
      <Typography variant="h5" component="h5" gutterBottom>
        h5 heading
      </Typography>
      <Typography variant="h6" component="h6" gutterBottom>
        h6 heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        This is sub title 1
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        This is sub title 2
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is body 1
      </Typography>
      <Typography variant="body2" gutterBottom>
        This is body 2
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        Button Text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Caption Text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        Overline Text
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        THIS IS NESTED TYPOGRAPHY EXAMPLE WITH CAPTION TEXT
        <Typography variant="caption" display="block" gutterBottom>
          PARAGRAPH CAPTION TEXT
        </Typography>
      </Typography>
    </React.Fragment>
  );
};
