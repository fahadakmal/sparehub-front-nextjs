import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../redux/slices/authSlice';
import * as cognito from './cognito.service';

export enum AuthStatus {
  Loading,
  SignedIn,
  SignedOut,
}

export interface IAuth {
  sessionInfo?: { username?: string; email?: string; sub?: string; accessToken?: string; refreshToken?: string };
  attrInfo?: any;
  authStatus?: AuthStatus;
  signInWithEmail?: any;
  signUpWithEmail?: any;
  signUpWithPhone?: any;
  signOut?: any;
  verifyCode?: any;
  getSession?: any;
  sendCode?: any;
  forgotPassword?: any;
  changePassword?: any;
  otpConfirmation?: any;
  resendOtp?: any;
  signInWithPhone?: any;
}

const defaultState: IAuth = {
  sessionInfo: {},
  authStatus: AuthStatus.Loading,
};

type Props = {
  children?: React.ReactNode;
};

const AuthContext: any = createContext(defaultState);

export const AuthIsSignedIn = ({ children }: Props) => {
  const auth: any = useAuth();
  const router = useRouter();

  if (auth.authStatus === AuthStatus.SignedIn) {
    return <>{children}</>;
  } else {
    router.push('/login');
    return null;
  }
};

export const AuthIsNotSignedIn = ({ children }: Props) => {
  const auth: any = useAuth();
  const router = useRouter();

  if (auth.authStatus === AuthStatus.SignedOut) {
    return <>{children}</>;
  } else {
    router.push('/');
    return null;
  }
};

export const AuthProvider = ({ children }: Props) => {
  const [authStatus, setAuthStatus] = useState(AuthStatus.Loading);
  const [sessionInfo, setSessionInfo] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    async function getSessionInfo() {
      try {
        const session: any = await getSession();
        setSessionInfo({
          accessToken: session.accessToken.jwtToken,
          refreshToken: session.refreshToken.token,
        });
        setAuthStatus(AuthStatus.SignedIn);
      } catch (err) {
        setAuthStatus(AuthStatus.SignedOut);
      }
    }
    getSessionInfo();
  }, [setAuthStatus, authStatus]);

  if (authStatus === AuthStatus.Loading) {
    return null;
  }

  const signUpWithEmail = async (username: string, email: string, password: string): Promise<any> => {
    try {
      return await cognito.signUpUserWithEmail(username, email, password);
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
    }
  };

  const signUpWithPhone = async (name: string, email: string, phoneNumber: string, password: string): Promise<any> => {
    try {
      return await cognito.signUpUserWithPhone(name, email, phoneNumber, password);
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
    }
  };

  const otpConfirmation = async (phoneNumber: string, otp: string): Promise<any> => {
    try {
      return await cognito.otpConfirmation(phoneNumber, otp);
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
    }
  };

  const resendOtp = async (phoneNumber: string): Promise<any> => {
    try {
      return await cognito.resendOtp(phoneNumber);
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
    }
  };

  async function signInWithEmail(username: string, password: string) {
    try {
      await cognito.signInWithEmail(username, password);
      setAuthStatus(AuthStatus.SignedIn);
    } catch (err) {
      if (err instanceof Error) {
        setAuthStatus(AuthStatus.SignedOut);
        throw err;
      }
    }
  }

  async function signInWithPhone(phoneNumber: string, password: string) {
    try {
      const res = await cognito.signInWithPhone(phoneNumber, password);
      dispatch(loginRequest({ attribute: phoneNumber, loginType: 'Phone', loginSuccess: true }));
      setAuthStatus(AuthStatus.SignedIn);
    } catch (err) {
      if (err instanceof Error) {
        setAuthStatus(AuthStatus.SignedOut);
        dispatch(loginRequest({ attribute: phoneNumber, loginType: 'Phone', loginSuccess: false }));
        throw err;
      }
    }
  }

  async function getSession() {
    try {
      const session = await cognito.getSession();
      return session;
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
    }
  }

  async function forgotPassword (email: string) {
    try {
      return await cognito.forgotPassword(email);
    } catch (error) {
      if (error instanceof Error) {
          throw error;
        }
    }
  }

  const state: IAuth = {
    authStatus,
    sessionInfo,
    signUpWithEmail,
    signUpWithPhone,
    signInWithEmail,
    getSession,
    otpConfirmation,
    resendOtp,
    signInWithPhone,
    forgotPassword,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
