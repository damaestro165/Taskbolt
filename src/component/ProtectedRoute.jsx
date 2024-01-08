import { Navigate, Outlet } from 'react-router-dom';
const ProtectedRoute = () => {
  const userData = localStorage.getItem('User');
  let token = 'usserdata`';

    // if (userData) {
    //   const { token: userToken } = JSON.parse(userData);
    //   token = userToken;
    // }

  return token !== null ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
