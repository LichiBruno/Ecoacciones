import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';

function Page4() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="Page 5"
        description="Page 5"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">Page 5</Typography>
      </Container>
    </>
  );
}

export default Page4;
