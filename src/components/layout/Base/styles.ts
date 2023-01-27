import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  background: {
    width: '100vw',
    height: '100vh',
    background:
      'url(https://bafybeias7azs7vt2xfu22ysylawps5fedj2vg232hpbe2thlot3scb3usm.ipfs.nftstorage.link/)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    filter: 'blur(1px)',
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));
