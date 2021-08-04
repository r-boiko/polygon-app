import React from 'react';
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

import useStyles from "./useStyles";

interface Props {
  title: string;
  items: [];
  color: any;
  onClick?: any;
}

const ChipsComponent = ({ title, items, color, onClick }: Props) => {
  const styles = useStyles();

  return items.length === 0
    ? null
    : (
      <div>
        <Typography variant="h6" className={styles.subTitle}>
          {title}
        </Typography>
        <div>
          {items?.map((el: string) => (
            <Chip
              className={styles.tags}
              color={color}
              key={el}
              label={el}
              onClick={onClick && onClick(el)}
            />
          ))}
        </div>
      </div>
    );
}

export default ChipsComponent;