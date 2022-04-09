import React from 'react';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';

import { Link as RouterLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import {
  FaHome as WelcomeIcon,
  FaRecycle as Recycle
} from 'react-icons/fa';

import isMobile from 'utils/isMobile';

import useStyles from './styles';

const StyledMenuItem = withStyles({ root: { width: '100%' } })(props => <MenuItem {...props} />);


function Menu({ isOpen, onClose, onOpen }) {
  const classes = useStyles({
    isOpen,
    isMobile,
  });
 
  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      swipeAreaWidth={30}
      disableBackdropTransition={true}
    >
      <List className={classes.list}>
        <div className={classes.toolbar} />
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/">
          <ListItemIcon>
            <WelcomeIcon />
          </ListItemIcon>
          <ListItemText primary="Bienvenido" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/page-1">
          <ListItemIcon>
            <Recycle style={{ color: "rgb(238, 86, 3)" }} />
          </ListItemIcon>
          <ListItemText primary="Capítulo 1" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/page-2">
          <ListItemIcon>
            <Recycle style={{ color: "rgb(255, 144, 1)" }} />
          </ListItemIcon>
          <ListItemText primary="Capítulo 2" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/page-3">
          <ListItemIcon>
            <Recycle style={{ color: "rgb(11, 126, 25)" }} />
          </ListItemIcon>
          <ListItemText primary="Capítulo 3" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/page-4">
        <ListItemIcon>
            <Recycle style={{ color: "rgb(4, 78, 161)" }} />
          </ListItemIcon>
          <ListItemText primary="Capítulo 4" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/page-5">
          <ListItemIcon>
            <Recycle style={{ color: "rgb(174, 19, 202)" }} />
          </ListItemIcon>
          <ListItemText primary="Capítulo 5" />
        </StyledMenuItem>
      </List>
    </SwipeableDrawer>
  );
}

export default Menu;
