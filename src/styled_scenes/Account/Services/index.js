import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { SectionWrap } from './../../../shared_components/layout/Page';
import UserBasicInfo from './../components/UserBasicInfo';

const AccountServicesScene = props => {
  return (
    <Grid centered columns={2}>
      <Grid.Column mobile={16} tablet={5} computer={4}>
        <SectionWrap>
          <UserBasicInfo {...props} />
        </SectionWrap>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={11} computer={12}>
        <h2>Services Scene</h2>
      </Grid.Column>
    </Grid>
  );
};

AccountServicesScene.propTypes = {
  user: PropTypes.object,
};

export default AccountServicesScene;
