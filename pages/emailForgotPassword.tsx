import WithAuthentication from '../src/hooks/WithAuthentication';
import EmailForgotPassword from '../src/views/ForgotPassword/EmailForgotPassword';

const EmailForgotPasswordPage = () => {
  return <WithAuthentication component={EmailForgotPassword} requiredAuth={false} />;
};
export default EmailForgotPasswordPage;
