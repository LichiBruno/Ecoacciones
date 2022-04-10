import React from 'react';
import ScrollBar from './components/ScrollBar/Component';

import { RecoilRoot } from 'recoil';
import CssBaseline from '@material-ui/core/CssBaseline';

import withErrorHandler from 'errorHandling';
import { App as ErrorBoundaryFallback } from 'errorHandling/Fallbacks';

import Layout from 'sections/Layout';
import Fb from 'components/Fb';
import { ThemeProvider } from 'theme';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <RecoilRoot>
      <ScrollBar />
      <ThemeProvider>
        <Fb>
          <CssBaseline />
          <Router>
            <Layout />
          </Router>
        </Fb>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default withErrorHandler(App, ErrorBoundaryFallback);
