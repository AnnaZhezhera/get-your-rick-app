import { Navigate, Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Footer } from './Footer/Footer';

export const ProtectedRoute = ({ user, redirectPath = '/', children }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  } else {
    return (
      <>
        <AppBar user={user} />
        {children ? children : <Outlet />}
        <Footer />
      </>
    );
  }
};
