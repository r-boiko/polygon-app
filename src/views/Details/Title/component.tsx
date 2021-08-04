import React from 'react';
import Typography from "@material-ui/core/Typography";

import useStyles from "./useStyles";

interface Props {
  symbol: string;
  name: string;
}

const TitleComponent = ({ symbol, name }: Props) => {
  const styles = useStyles();

  return (
    <Typography variant="h6" className={styles.subTitle}>
      <Typography
        component="span"
        style={{ fontSize: "1.2rem", fontWeight: 500 }}
      >
        {symbol}
      </Typography>{" "}
      {name}
    </Typography>
  );
}

export default TitleComponent;