import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    background:
      'linear-gradient(0deg, #0f0f0f 0%, rgba(6,18,98,1) 100%, #0f0f0f 100%);',
  },
}));
