import { Navigate, Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export const ProtectedRoute = ({ user, redirectPath = '/', children }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  } else {
    return (
      <>
        <AppBar />
        {children ? children : <Outlet />}
      </>
    );
  }
};
