import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ user, redirectPath = '/login', children }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  } else {
    return (
      <>
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'Roboto',
            width: '1020px',
            margin: '0 auto',
            padding: '12px 0',
            justifyContent: 'flex-end',
          }}
        >
          <img
            src={user.picture.data.url}
            alt={user.name}
            width="40px"
            style={{ borderRadius: '50%', marginRight: '12px' }}
          />
          <p>Welcome, {user.name}!</p>
        </header>
        {children ? children : <Outlet />}
      </>
    );
  }
};
