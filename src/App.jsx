/* eslint-disable no-unused-vars */
import { ThemeProvider } from '@/components/theme-provider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import AllJobs from './pages/AllJobs';
import About from './pages/About';
import Root from './layouts/Root';
import MyJob from './pages/MyJob';
import Home from './pages/Home';
import JobDetails from './pages/JobDetails';
import Onboard from './pages/Onboard';
import AuthenticateRoute from './components/AuthenticateRoute';
import PostJob from './pages/PostJob';

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/jobs',
        element: (
          <AuthenticateRoute>
            <AllJobs />
          </AuthenticateRoute>
        ),
      },
      {
        path: '/my-jobs',
        element: (
          <AuthenticateRoute>
            <MyJob />,
          </AuthenticateRoute>
        ),
      },
      {
        path: '/job/:id',
        element: (
          <AuthenticateRoute>
            <JobDetails />,
          </AuthenticateRoute>
        ),
      },
      {
        path: '/onboard',
        element: (
          <AuthenticateRoute>
            <Onboard />,
          </AuthenticateRoute>
        ),
      },
      {
        path: '/post-job',
        element: (
          <AuthenticateRoute>
            <PostJob />
          </AuthenticateRoute>
        ),
      },
    ],
  },
]);


function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
       
      </ThemeProvider>
    </>
  );
}

export default App;
