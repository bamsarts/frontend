import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Message } from 'semantic-ui-react';
import { SectionWrap } from './../../../shared_components/layout/Page';
import UserBasicInfo from './../components/UserBasicInfo';

const AccountSettingsScene = props => {
  const isMetaMaskInstalled = props.hasMetaMask();
  const publicAddrAlreadyPresent = !!(props.user_profile && props.user_profile.publicAddress);
  const metaMaskButtonTxt = publicAddrAlreadyPresent ? 'MetaMask Connected' : 'Connect MetaMask';
  return (
    <Grid centered columns={2}>
      <Grid.Column mobile={16} tablet={5} computer={4}>
        <SectionWrap>
          <UserBasicInfo {...props} />
        </SectionWrap>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={11} computer={12}>
        <h2>Settings Scene</h2>
        <Button
          color="orange"
          inverted={!isMetaMaskInstalled}
          disabled={!isMetaMaskInstalled || publicAddrAlreadyPresent}
          onClick={props.signData}
        >
          {metaMaskButtonTxt}
        </Button>
        {!isMetaMaskInstalled && (
          <Message warning>
            Please install <a href="https://metamask.io/">MetaMask</a>
          </Message>
        )}
        {props.metaMaskError.message && <Message warning>{props.metaMaskError.message}</Message>}
      </Grid.Column>
    </Grid>
  );
};

AccountSettingsScene.propTypes = {
  user_profile: PropTypes.object,
  showMetaMaskLogin: PropTypes.bool,
  hasMetaMask: PropTypes.func.isRequired,
  signData: PropTypes.func.isRequired,
  metaMaskError: PropTypes.object,
};

AccountSettingsScene.defaultProps = {
  showMetaMaskLogin: false,
  metaMaskError: {}
};

export default AccountSettingsScene;