import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// import { FaReact as ReactIcon } from 'react-icons/fa';

import Fb from 'components/Fb';
import Meta from 'components/Meta';

import useStyles from './styles';

function Welcome() {
  const matchSmallScreen = useMediaQuery('(max-width: 600px)');
  const classes = useStyles();

  return (
    <>
      <Meta
        title="Bienvenido"
        description="Bienvenido a Ecoacciones para transformar"
      />
      <Container maxWidth="sm" className="full-height">
        <Fb justifyCenter alignCenter className={classes.wrapper}>
          {/* <Fb className={classes.iconBox}><ReactIcon className={classes.icon} /></Fb> */}
          <Typography
            variant={matchSmallScreen ? 'h4' : 'h3'}
            className={classes.title}
          >
            Introducción
          </Typography>
        </Fb>
      </Container>
    </>
  );
}

export default Welcome;
