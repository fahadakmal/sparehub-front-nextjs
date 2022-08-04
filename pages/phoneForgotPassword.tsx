import WithAuthentication from "../src/hooks/WithAuthentication";
import PhoneForgotPassword from "../src/views/ForgotPassword/PhoneForgotPassword";

const PhoneForgotPasswordPage = () => {
  return (
    <WithAuthentication 
        component={PhoneForgotPassword} 
        requiredAuth={false} 
    />
  );
};
export default PhoneForgotPasswordPage;
