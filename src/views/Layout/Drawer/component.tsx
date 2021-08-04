import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Drawer from "@material-ui/core/Drawer";
import { useTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

import useStyles from "./useStyles";
import useGlobalStyles from "../../../hooks/useGlobalStyles";

interface Props {
  open: boolean,
  onDrawerToggle: any
}

const DrawerComponent = ({ open, onDrawerToggle }: Props) => {
  const styles = useStyles();
  const globalStyles = useGlobalStyles();
  const theme = useTheme()

  return (
    <Drawer
      className={styles.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: styles.drawerPaper,
      }}
    >
      <div className={styles.drawerHeader}>
        <IconButton onClick={onDrawerToggle}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Avatar className={globalStyles.purple} />
    </Drawer>
  );
}

export default DrawerComponent;