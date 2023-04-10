import { Box } from '@chakra-ui/react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
  Outlet,
} from 'react-router-dom';
import Signup from './SignupPage';
import Login from './LoginPage';
import ResetPassword from './ResetPassword';
import OtpPage from './OtpPage';
import ForgetPass from './ForgetPass';
import ProtectedRoute from './component/ProtectedRoute';
import { Dashboard } from './Dashboard';

function App() {
  const Root = () => {
    return (
      <Box className='container h-screen w-full'>
        <Outlet />
      </Box>
    );
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Root />}>
          <Route index element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/otp' element={<OtpPage />} />
          <Route path='/forgetpass' element={<ForgetPass />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
