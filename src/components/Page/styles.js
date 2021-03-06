import { makeStyles } from '@material-ui/core/styles';

import isMobile from 'utils/isMobile';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    position: isMobile ? 'absolute' : 'relative',
    left: isMobile ? '0' : '',
    right: isMobile ? '0' : '',
    'margin-left': isMobile ? 'auto' : '',
    'margin-right': isMobile ? 'auto' : '',
    // align text to center only on mobile
    // 'text-align': isMobile ? 'center' : '',
    // Above code center the title and icon
    'text-align': 'center',
    'padding-left': theme.spacing(isMobile ? 1.5 : 3),
    'padding-right': theme.spacing(isMobile ? 1.5 : 3),
  },
}));

export default useStyles;