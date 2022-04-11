import { makeStyles } from '@material-ui/core/styles';

import isMobile from 'utils/isMobile';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    position: isMobile ? 'absolute' : 'relative',
    'margin-left': isMobile ? 'auto' : '',
    'margin-right': isMobile ? 'auto' : '',
    left: isMobile ? '0' : '',
    right: isMobile ? '0' : '',
    // 'text-align': isMobile ? 'center' : '',
    'padding-left': theme.spacing(isMobile ? 1.5 : 3),
    'padding-right': theme.spacing(isMobile ? 1.5 : 3),
  
  },
}));

export default useStyles;
