import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from "./useStyles";
import useGlobalStyles from "../../../hooks/useGlobalStyles";

import Search from "../../../components/shared/Search";

interface Props {
  open: boolean;
  onDrawerToggle: any;
  setSelectedTicker: any;
}

const AppBarComponent = ({ open, onDrawerToggle, setSelectedTicker }: Props) => {
  const styles = useStyles();
  const globalStyles = useGlobalStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(styles.appBar, {
        [styles.appBarShift]: open,
      })}
    >
     <Toolbar>
        <IconButton
          color="inherit"
           aria-label="open drawer"
           onClick={onDrawerToggle}
           edge="start"
           className={clsx(styles.menuButton, open && globalStyles.hide)}
         >
         <MenuIcon />
         </IconButton>
         <Search setSelectedTicker={setSelectedTicker} />
     </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;