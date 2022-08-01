import { Login } from '@mui/icons-material';
import { useRouter } from 'next/router';
import React, { createContext, useContext, useState, useEffect } from 'react';

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
  getAttributes?: any;
  setAttribute?: any;
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
  }
};

export const AuthIsNotSignedIn = ({ children }: Props) => {
  const auth: any = useAuth();
  const { authStatus } = auth;
  return <>{authStatus === AuthStatus.SignedOut ? children : null}</>;
};

export const AuthProvider = ({ children }: Props) => {
  const [authStatus, setAuthStatus] = useState(AuthStatus.Loading);
  const [sessionInfo, setSessionInfo] = useState({});
  const [attrInfo, setAttrInfo] = useState([]);

  useEffect(() => {
    async function getSessionInfo() {
      try {
        const session: any = await getSession();
        setSessionInfo({
          accessToken: session.accessToken.jwtToken,
          refreshToken: session.refreshToken.token,
        });
        const attr: any = await getAttributes();
        setAttrInfo(attr);
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
      await cognito.signInWithPhone(phoneNumber, password);
      setAuthStatus(AuthStatus.SignedIn);
    } catch (err) {
      if (err instanceof Error) {
        setAuthStatus(AuthStatus.SignedOut);
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

  async function getAttributes() {
    try {
      const attr = await cognito.getAttributes();
      return attr;
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
    }
  }

  async function setAttribute(attr: any) {
    try {
      const res = await cognito.setAttribute(attr);
      return res;
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
    }
  }

  const state: IAuth = {
    authStatus,
    sessionInfo,
    attrInfo,
    signUpWithEmail,
    signUpWithPhone,
    signInWithEmail,
    getSession,
    getAttributes,
    setAttribute,
    otpConfirmation,
    resendOtp,
    signInWithPhone,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
