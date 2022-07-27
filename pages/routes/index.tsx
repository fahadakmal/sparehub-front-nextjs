import React from 'react';
import { withTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, AuthIsNotSignedIn, AuthIsSignedIn } from '../auth/Auth';
import DashboardContainer from '../components/DashboardContainer/DashboardContainer';
import routes from './routes';

const AppRoutes = (props: any) => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.requireAuth ? (
                  <AuthIsSignedIn>
                    <DashboardContainer translate={props.t} {...props}>
                      <route.component translate={props.t} {...props} />
                    </DashboardContainer>
                  </AuthIsSignedIn>
                ) : (
                  <AuthIsNotSignedIn>
                    <route.component translate={props.t} {...props} />
                  </AuthIsNotSignedIn>
                )
              }
              //TODO
              // element={
              //   <DashboardContainer>
              //     <route.component />
              //   </DashboardContainer>
              // }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
export default withTranslation()(AppRoutes);
