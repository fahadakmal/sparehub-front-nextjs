import { Dashboard } from '../views/Dashboard';
import { ForgotPassword } from '../views/ForgotPassword';
import { Login } from '../views/Login';
import { Signup } from '../views/Signup';
import Congratulations from '../views/Signup/Congratulations';
import CreatePassword from '../views/Signup/CreatePasword';
import OTPVerification from '../views/Signup/OTPVerification';

const routes = [
  {
    id: 1,
    path: '/',
    component: Dashboard,
    requireAuth: true,
  },
  {
    id: 2,
    path: '/signup',
    component: Signup,
    requireAuth: false,
  },
  {
    id: 3,
    path: '/reset',
    component: ForgotPassword,
    requireAuth: false,
  },
  {
    id: 4,
    path: '/login',
    component: Login,
    requireAuth: false,
  },
  {
    id: 5,
    path: '/success',
    component: Congratulations,
    requireAuth: false,
  },
  {
    id: 6,
    path: '/createPassword',
    component: CreatePassword,
    requireAuth: false,
  },
  {
    id: 7,
    path: '/otpVerification',
    component: OTPVerification,
    requireAuth: false,
  },
];

export default routes;
