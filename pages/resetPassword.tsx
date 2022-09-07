import WithAuthentication from '../src/hooks/WithAuthentication';
import ResetPassword from '../src/views/ForgotPassword/ResetPassword';

const ResetPasswordPage = () => {
  return <WithAuthentication component={ResetPassword} requiredAuth={false} />;
};

export default ResetPasswordPage;
