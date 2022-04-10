import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Chapter1 from './Chapter1';

import Meta from 'components/Meta';

import useStyles from './styles';

function Page1() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="Capítulo 1"
        description="Capítulo 1"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h5">
          <Chapter1/>
        </Typography>
      </Container>
    </>
  );
}

export default Page1;
