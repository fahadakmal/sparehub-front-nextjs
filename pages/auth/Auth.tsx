import React, { createContext, useContext, useState, useEffect } from 'react';
// import { Navigate } from 'react-router-dom';

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
  signOut?: any;
  verifyCode?: any;
  getSession?: any;
  sendCode?: any;
  forgotPassword?: any;
  changePassword?: any;
  getAttributes?: any;
  setAttribute?: any;
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
  return <>{auth.authStatus === AuthStatus.SignedIn ? children : <Navigate to="/login" replace />}</>;
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
    signInWithEmail,
    getSession,
    getAttributes,
    setAttribute,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
