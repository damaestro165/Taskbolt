import { Navigate, Outlet } from 'react-router-dom';
const ProtectedRoute = () => {
  const userData = localStorage.getItem('User');
  let token = null;

  if (userData) {
    const { token: userToken } = JSON.parse(userData);
    token = userToken;
  }
  console.log(token);
  // const { token } = JSON.parse(localStorage.getItem('User'));

  return token !== null ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
