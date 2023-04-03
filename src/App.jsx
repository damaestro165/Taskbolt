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
      <Route path='/' element={<Root />}>
        <Route index element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to='/' />} />
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
