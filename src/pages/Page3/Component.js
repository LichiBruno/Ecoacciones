import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Chapter3 from './Chapter3'

import Meta from 'components/Meta';

import useStyles from './styles';

function Page3() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="Capítulo 3"
        description="Capítulo 3"
      />
      <Container maxWidth="md" className={classes.root}>
        <Typography variant="h5">
          <Chapter3 />
        </Typography>
      </Container>
    </>
  );
}

export default Page3;