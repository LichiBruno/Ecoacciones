import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Chapter2 from './Chapter2';

import Meta from 'components/Meta';

import useStyles from './styles';

function Page2() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="Capítulo 2"
        description="Capítulo 2"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h5">
          <Chapter2/>
        </Typography>
      </Container>
    </>
  );
}

export default Page2;