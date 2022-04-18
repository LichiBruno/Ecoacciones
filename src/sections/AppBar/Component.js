import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import {
  FaBrush as BrushIcon,
  FaRedo as RedoIcon,
  FaBars as MenuIcon,
  FaHome as HouseIcon,
} from 'react-icons/fa';

import Link from 'components/Link';
import Fb from 'components/Fb';
import Divider from 'components/Divider';

import useTheme from 'store/theme';
import useSW from 'store/sw';

import { title, repository } from 'config';

import useStyles from './styles';

function AppBar_({ onMenuOpen }) {
  const classes = useStyles();
  const [, themeActions] = useTheme();
  const [swState, swActions] = useSW();

  function handleToggleTheme() {
    themeActions.toggle();
  }

  function handleAppUpdate() {
    swActions.update();
  }

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      color="default"
      elevation={1}
    >
      <Toolbar className={classes.toolbar}>
        <Fb className={classes.main}>
          <IconButton
            edge="start"
            aria-label="Menú"
            onClick={onMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Button aria-label="go to home" className={classes.title}>
              {title}
            </Button>
          </Link>
        </Fb>
        <Fb>
          {
            swState.isUpdated && (
              <>
                <Tooltip title="¡Hay una nueva versión de la app! Toca para actualizar." arrow>
                  <IconButton aria-label="Actualizar app" color="secondary" onClick={handleAppUpdate}>
                    <RedoIcon />
                  </IconButton>
                </Tooltip>
                <Divider orientation="vertical" flexItem />
              </>
            )
          }
          <Tooltip title="COPADE" arrow>
            <IconButton
              aria-label="ir a la página del COPADE"
              component="a"
              target="_blank"
              rel="noreferrer"
              href={repository}
            >
              <HouseIcon /> 
            </IconButton>
          </Tooltip>
          <Divider orientation="vertical" flexItem />
          <Tooltip title="Cambiar tema" arrow>
            <IconButton
              aria-label="Cambiar tema"
              edge="end"
              onClick={handleToggleTheme}
            >
              <BrushIcon />
            </IconButton>
          </Tooltip>
        </Fb>
      </Toolbar>
    </AppBar>
  );
}

export default AppBar_;
