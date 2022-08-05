import { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { AuthProvider, AuthIsNotSignedIn, AuthIsSignedIn } from '../auth/Auth';
import DashboardContainer from '../components/DashboardContainer/DashboardContainer';
import { useRouter } from 'next/router'
const WithAuthentication = (props: any) => {
  const router=useRouter()
  const { component: Component, requiredAuth } = props;
  console.log(router.pathname,"newhiii")
  return (
    <AuthProvider>
      {requiredAuth ? (
        <AuthIsSignedIn>
          {router.pathname !== "/"?
          <Component translate={props.t} {...props} /> :
          <DashboardContainer translate={props.t} {...props}>
            <Component translate={props.t} {...props} />
          </DashboardContainer>
}
        </AuthIsSignedIn>
      ) : (
        <AuthIsNotSignedIn>
          <Component translate={props.t} {...props} />
        </AuthIsNotSignedIn>
      )}
    </AuthProvider>
  );
};

export default withTranslation()(WithAuthentication);
