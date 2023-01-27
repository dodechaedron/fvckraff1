import { FC } from 'react';
import { Button, Link, Tooltip } from '@material-ui/core';
import { useHistory } from 'react-router';

import discordLogo from '../../assets/discord-logo.svg';
import twitterLogo from '../../assets/twitter-logo.svg';
import documentLogo from '../../assets/document-logo.svg';
import Screen from '../../components/layout/Screen';
import { routes } from '../../router/routes';
import useCommonStyles from '../../assets/styles';
import { useStyles } from './styles';
import { useViewport } from '../../hooks/useViewport';
import { DeviceType } from '../../providers/ViewportProvider';
require('./styles.css');

const LandingScreen: FC = () => {
  const { device } = useViewport();
  const classes = { ...useCommonStyles(), ...(useStyles({ device }) as any) };
  const { push } = useHistory();

  return (
    <div className={classes.root}>
      <img
        className={device === DeviceType.Phone ? 'banner-small' : 'banner'}
        src="logo-bulgae-nobg.png"
        alt={'Bulgae Labs banner'}
        width={device === DeviceType.Phone ? '280px' : '600px'}
      />
      <div className={classes.socialLinksContainer}>
        <div className={classes.socialLinkContainer}>
          <Tooltip title="Discord" placement="top">
            <Link
              className={classes.socialLink}
              target="blank"
              href={`https://discord.gg/YeA9CajTe5`}
            >
              <img src={discordLogo} alt={'disord-logo'} width="50px" />
            </Link>
          </Tooltip>
        </div>
        <div className={classes.socialLinkContainer}>
          <Tooltip title="Twitter" placement="top">
            <Link
              className={classes.socialLink}
              target="blank"
              href={`https://twitter.com/BULGAELABS`}
            >
              <img src={twitterLogo} alt={'twitter-logo'} width="50px" />
            </Link>
          </Tooltip>
        </div>
        <div className={classes.socialLinkContainer}>
          <Tooltip title="whitepaper" placement="top">
            <Link
              className={classes.socialLink}
              target="blank"
              href={`https://bulgaelabs.gitbook.io/bulgae-labs/bulgae-labs`}
            >
              <img src={documentLogo} alt={'document-logo.svg'} width="50px" />
            </Link>
          </Tooltip>
        </div>

      </div>
      <div className={classes.buttonContainer}>
        <Button
          variant="outlined"
          color="secondary"
          size={'large'}
          onClick={() => push(routes.RAFFLES)}
          className={classes.mainButton}
        >
          Bulgae raffle
        </Button>
      </div>
    </div>
  );
};

const LandingScreenWithLayout = () => (
  <Screen>
    <LandingScreen />
  </Screen>
);

export default LandingScreenWithLayout;
