import { withTranslation } from 'react-i18next';
import { AuthProvider, AuthIsNotSignedIn, AuthIsSignedIn } from '../auth/Auth';
import DashboardContainer from '../components/DashboardContainer/DashboardContainer';
const WithAuthentication = (props: any) => {
  const { component: Component, requiredAuth } = props;
  return (
    <AuthProvider>
      {requiredAuth ? (
        <AuthIsSignedIn>
          <DashboardContainer translate={props.t} {...props}>
            <Component translate={props.t} {...props} />
          </DashboardContainer>
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
